const fs=require('fs'), path=require('path');
const root=__dirname, source=path.join(root,'source');
const out=path.join(root,'web');
async function build(){
 const babel=await import('./tooling/node_modules/@babel/core/lib/index.js');
 const preset=(await import('./tooling/node_modules/@babel/preset-env/lib/index.js')).default;
 const esbuild=require('./tooling/node_modules/esbuild');
 fs.mkdirSync(path.join(out,'js'),{recursive:true});
 let html=fs.readFileSync(path.join(source,'index.html'),'utf8');
 html=html.replace("const _isTizen=!!window.tizen||/Tizen/i.test(navigator.userAgent);",`const _isSamsung=!!window.tizen||/Tizen/i.test(navigator.userAgent);
const _isPhilips=/Philips|NETTV|Saphi/i.test(navigator.userAgent)||/[?&]tv=philips(?:&|$)/i.test(location.search);
// Existing TV navigation and performance paths apply to both platforms.
const _isTizen=_isSamsung||_isPhilips;`);
 html=html.replace('width:calc(1600px / 1.3)!important; height:calc(900px / 1.3)!important;', 'width:calc(100vw / 1.3)!important; height:calc(100vh / 1.3)!important;');
 html=html.replace('const mob=window.innerWidth<=900||', 'const mob=!_isTizen&&(window.innerWidth<=900||');
 html=html.replace("('ontouchstart' in window&&window.innerWidth<=1100);", "('ontouchstart' in window&&window.innerWidth<=1100));");
 // SAPHI engines can ignore inset, leaving the player overlays without bounds.
 html=html.replaceAll('inset:0;', 'top:0;right:0;bottom:0;left:0;');
 html=html.replace("if(_isApp) document.body.classList.add('is-app');", "if(_isApp) document.body.classList.add('is-app');\nif(_isPhilips) document.documentElement.classList.add('philips-tv');");
 html=html.replace('<div class="ply-eps" id="plyEps"></div>', '');
 html=html.replace(/(<button class="pb" id="pcFullscreen"[\s\S]*?<\/button>\s*<\/div>)/, '$1\n<div class="ply-eps" id="plyEps"></div>');
 html=html.replace("if(_isTizen||typeof Hls!=='undefined'){ cb(); return; }", "if(_isSamsung||$('vid').canPlayType('application/vnd.apple.mpegurl')||typeof Hls!=='undefined'){ cb(); return; }");
 html=html.replace("s.src='https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.4.12/hls.min.js';", "s.src='js/hls.min.js';\n  s.onerror=()=>{ cb(); };");
 html=html.replace("if(!isTizen && typeof Hls!=='undefined' && Hls.isSupported()){", "if(!nativeHls && typeof Hls!=='undefined' && Hls.isSupported()){");
 // Every playback request must handle asynchronous cancellation by pause/seek.
 html=html.replaceAll("v.play().catch(()=>{});", "philipsPlay(v);");
 html=html.replaceAll("v.play();", "philipsPlay(v);");
 html=html.replaceAll("$('vid').play();", "philipsPlay($('vid'));");
 html=html.replace("function doExit(){ if(window.tizen)", "function doExit(){ if(_isPhilips){ if(history.length>1) history.back(); else {closeExit(); alert('Для выхода используйте кнопку Home на пульте.');} return; } if(window.tizen)");
 // Normalize legacy Philips keyCode events before existing key handlers see them.
 const remote=`(function(){
 if(!Element.prototype.matches) Element.prototype.matches=Element.prototype.webkitMatchesSelector;
 if(!Element.prototype.closest) Element.prototype.closest=function(s){var n=this;while(n&&n.nodeType===1){if(n.matches(s))return n;n=n.parentElement;}return null;};
 if(!Element.prototype.scrollTo) Element.prototype.scrollTo=function(o,y){this.scrollTop=typeof o==='object'?(o.top||0):(y||0);this.scrollLeft=typeof o==='object'?(o.left||0):o;};
 var keys={13:'Enter',37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',8:'Backspace',27:'Escape',461:'Backspace',10009:'Backspace',415:'MediaPlay',19:'MediaPause',413:'MediaStop',412:'MediaRewind',417:'MediaFastForward',10252:'MediaPlayPause'};
 function normalize(e){var key=keys[e.keyCode];if(!key||e.key===key)return;
 try{Object.defineProperty(e,'key',{value:key});}catch(ignore){}
 }
 document.addEventListener('keydown',normalize,true);
 document.addEventListener('keyup',normalize,true);
})();`;
 html=html.replace("'use strict';", "'use strict';\n"+remote);
 html=html.replace('const r=await fetch(base+path,{','const r=await philipsRequest(base+path,{');
 html=html.replace('signal:AbortSignal.timeout(8000)','');
 html=html.replace('if(base===BASE2) throw e;', "if(base===BASE2){if(window.philipsBoot)philipsBoot.apiError(e.message);throw e;}");
 html=html.replace("localStorage.removeItem('alv_coll_releases');", "try{localStorage.removeItem('alv_coll_releases');}catch(_){}");
 html=html.replace('init().then(_cacheDOM).catch(_cacheDOM);', "init().then(()=>{_cacheDOM();if(document.querySelector('.card'))philipsBoot.ready();}).catch(e=>{_cacheDOM();philipsBoot.fail(e.message);});");
 html=html.replaceAll("document.addEventListener('keydown',e=>{", "document.addEventListener('keydown',e=>{e=philipsKeyEvent(e);");
 html=html.replaceAll("document.addEventListener('keyup',e=>{", "document.addEventListener('keyup',e=>{e=philipsKeyEvent(e);");
 html=html.replace('const obs=new IntersectionObserver(entries=>{', "if(typeof IntersectionObserver==='undefined') return;\n  const obs=new IntersectionObserver(entries=>{");
 html=html.replace('if(_isTizen) el.scrollIntoView({block:', 'if(_isPhilips) el.scrollIntoView(false);\n  else if(_isTizen) el.scrollIntoView({block:');
 html=html.replace("if(k==='MediaPlayPause'||k==='Pause')", "if(k==='MediaPlay'){if(Z==='player'){philipsPlay($('vid'));e.preventDefault();}return;}\n  if(k==='MediaPause'){if(Z==='player'){$('vid').pause();e.preventDefault();}return;}\n  if(k==='MediaStop'){if(Z==='player'){closePlayer();e.preventDefault();}return;}\n  if(k==='MediaPlayPause'||k==='Pause')");
 const match=html.match(/<script>([\s\S]*?)<\/script>/);
 const result=await babel.transformAsync(match[1],{presets:[[preset,{targets:{chrome:'38'},modules:false,useBuiltIns:false}]],comments:true});
 fs.writeFileSync(path.join(out,'js/app.js'),result.code);
 fs.copyFileSync(path.join(root,'philips-boot.js'),path.join(out,'js/boot.js'));
 html=html.replace(match[0],'<script src="js/boot.js?v=105"></script>\n<script src="js/polyfills.js?v=105" onerror="philipsBoot.fail(\'Не загрузились polyfills.js\')"></script>\n<script src="js/app.js?v=105" onerror="philipsBoot.fail(\'Не загрузился app.js\')"></script>');
 html=html.replace('</style>', `
/* Older SAPHI engines: readable layouts without CSS Grid or flex gap. */
@supports not (display:grid){
 .cat-grid,.coll-grid{display:flex;flex-wrap:wrap;align-content:flex-start;}
 .cat-grid .card,.coll-grid .card{width:160px;flex:0 0 160px;margin:0 12px 12px 0;}
 .sch-grid{display:flex;}.sch-grid>*{flex:1;min-width:0;margin-right:10px;}
 .det-meta{display:block;}.det-meta>*{display:inline-block;margin:3px 10px 3px 0;}
}
html.legacy-gap .track>.card{margin-right:10px;}
html.legacy-gap #nav>*,html.legacy-gap #hdr-r>*{margin-right:12px;}
html.legacy-gap .c-foot>*{margin-right:5px;}
/* Philips player: explicit edges and a separate episode strip. */
html.philips-tv #plyOv{top:0;right:0;bottom:0;left:0;}
html.philips-tv .ply-wrap{position:absolute;top:0;right:0;bottom:0;left:0;}
html.philips-tv #vid{position:absolute;top:0;left:0;width:100%;height:100%;}
html.philips-tv .ply-ui{display:block;top:0;right:0;bottom:0;left:0;}
html.philips-tv .ply-ctrl{position:absolute;left:0;right:0;bottom:0;padding:18px 4%;}
html.philips-tv .ply-ttl{font-size:20px;line-height:26px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
html.philips-tv .ply-ep{font-size:13px;line-height:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:8px;}
html.philips-tv .ply-row{gap:0;min-height:54px;}
html.philips-tv .ply-row>.pb{width:46px;height:46px;margin-right:12px;}
html.philips-tv .ply-row>.pb.big{width:54px;height:54px;}
html.philips-tv .ply-time{font-size:13px;white-space:nowrap;}
html.philips-tv .ply-qual-btn{margin-left:auto;padding:10px 16px;font-size:15px;}
html.philips-tv .ply-eps{gap:0;margin:12px 0 0;max-width:100%;height:34px;overflow:hidden;}
html.philips-tv .pep{margin-right:7px;padding:7px 12px;font-size:13px;line-height:18px;}
html.philips-tv .ply-qual-menu{right:4%;bottom:150px;min-width:130px;display:none;gap:0;}
html.philips-tv .ply-qual-menu.on{display:block;}
html.philips-tv .ply-qual-opt{display:block;width:100%;margin:3px 0;padding:10px 18px;}
html.philips-tv .ply-back-btn{top:20px;left:4%;}
html.philips-tv #skipBtn{right:4%;bottom:235px;}
html.philips-tv #skipNextBtn{right:4%;bottom:285px;}
</style>`);
 html=html.replace('<script src="js/app.js?v=105"', `<script>var gapTest=document.createElement('div');gapTest.style.cssText='display:flex;flex-direction:column;row-gap:1px;position:absolute';gapTest.appendChild(document.createElement('div'));gapTest.appendChild(document.createElement('div'));document.body.appendChild(gapTest);if(gapTest.scrollHeight!==1)document.documentElement.className+=' legacy-gap';gapTest.parentNode.removeChild(gapTest);</script>\n<script src="js/app.js?v=105"`);
 // Resolve CSS variables for engines predating custom properties.
 const vars={};html.replace(/--([\w-]+):([^;}]+)/g,(_,k,v)=>{if(!(k in vars))vars[k]=v;return _;});
 html=html.replace(/var\(--([\w-]+)\)/g,(m,k)=>vars[k]||m);
 fs.writeFileSync(path.join(out,'index.html'),html);
 fs.copyFileSync(path.join(source,'icon.png'),path.join(out,'icon.png'));
 await esbuild.build({stdin:{contents:"require('core-js/stable'); require('whatwg-fetch');",resolveDir:path.join(root,'tooling')},bundle:true,target:'es5',outfile:path.join(out,'js/polyfills.js')});
 const hls=await fetch('https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.4.12/hls.min.js');if(!hls.ok)throw Error('HLS download failed');
 fs.writeFileSync(path.join(out,'js/hls.min.js'),await hls.text());
 fs.writeFileSync(path.join(out,'UPSTREAM.txt'),'Source: https://github.com/CoreDip/anilibria-tizen-wgt\nCommit: d027ab80c83ee9eed22251e47e5db759d4bff0f3\nUpstream README declares MIT; repository contains no standalone LICENSE.\nAdaptation: Philips SAPHI, remote keys, legacy JS/CSS, MSX local launcher.\nBundled dependencies retain their license notices; core-js MIT, whatwg-fetch MIT, hls.js Apache-2.0.\n');
 console.log('Built '+out);
}
build().catch(e=>{console.error(e);process.exitCode=1;});



