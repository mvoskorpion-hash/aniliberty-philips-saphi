(function(){'use strict';
var API='https://api.yani.tv',limit=30,offset=0,catalogMode='catalog',items=[],view='catalog',release=null,videos=[],groups=[],players=[],chosenPlayer=null,group=null,current=null,catalogFocus=0,requestId=0,pending=null,busy=false,playerOrigin='',isKodik=false,isCvh=false,isAksor=false,position=0,duration=0,paused=true;
function $(id){return document.getElementById(id)}
function message(s){$('status').textContent=s}
function focusFirst(){var b=$('grid').querySelector('button');if(b)b.focus();else $('back').focus()}
function resetGrid(title){$('grid').className='';$('releaseCard').hidden=true;$('heading').hidden=false;$('heading').textContent=title;$('grid').textContent='';$('description').textContent='';$('more').hidden=true}
function button(text,fn,cls){var b=document.createElement('button');b.className=cls||'choice';b.textContent=text;b.onclick=fn;$('grid').appendChild(b);return b}
function safeUrl(raw){if(typeof raw!=='string')return '';var a=document.createElement('a');a.href=raw.indexOf('//')===0?'https:'+raw:raw;return a.protocol==='https:'?a.href:''}
function origin(url){var a=document.createElement('a');a.href=url;return a.protocol+'//'+a.host}
function request(path,done){var id=++requestId;if(pending)pending.abort();var x=new XMLHttpRequest();pending=x;busy=true;message('Загрузка…');x.open('GET',API+path,true);x.timeout=15000;x.onload=function(){if(id!==requestId)return;busy=false;pending=null;var j;try{j=JSON.parse(x.responseText)}catch(e){message('Сервис вернул неверный ответ. Повторите попытку.');return}if(x.status<200||x.status>=300||!j.response){message(x.status===401||x.status===403?'API ограничил доступ. Для подключения потребуется публичный токен приложения YummyAnime.':'Ошибка сервиса '+x.status+'. Повторите попытку.');return}done(j.response)};x.onerror=x.ontimeout=function(){if(id!==requestId)return;busy=false;pending=null;message('Не удалось связаться с YummyAnime. Повторите поиск или откройте каталог.');};x.send()}
function renderCards(){resetGrid(catalogMode==='top'?'Топ-100':$('query').value?'Результаты поиска':'Каталог');items.forEach(function(r,i){var b=button('',function(){catalogFocus=i;openRelease(r.anime_url)},'card'),img=document.createElement('img'),label=document.createElement('span');img.alt='';img.src=safeUrl(r.poster&&(r.poster.big||r.poster.fullsize));img.onerror=function(){this.style.visibility='hidden'};label.textContent=r.title;b.appendChild(img);b.appendChild(label);if(r.year){var year=document.createElement('span');year.className='card-year';year.textContent=r.year;b.appendChild(year)}var score=ratingText(r);if(score){var badge=document.createElement('strong');badge.className='score';badge.textContent=score;b.appendChild(badge)}});$('more').hidden=items.length===0||offset%limit!==0||(catalogMode==='top'&&offset>=100);message(items.length?'Загружено: '+items.length:'Ничего не найдено')}
function catalog(reset){if(busy&&!reset)return;view='catalog';if(reset){offset=0;items=[];catalogFocus=0;resetGrid('Каталог')}var count=catalogMode==='top'?Math.min(limit,100-offset):limit;if(count<=0)return;
request('/anime?limit='+count+'&offset='+offset+(catalogMode==='top'?'&sort=top&sort_forward=true':'&sort=rating&sort_forward=false&q='+encodeURIComponent($('query').value)),function(list){if(!Array.isArray(list)){message('Неверный формат каталога');return}var first=items.length;items=items.concat(list);offset+=list.length;renderCards();$('more').hidden=list.length<count||(catalogMode==='top'&&offset>=100);var cards=$('grid').querySelectorAll('button');if(cards[first])cards[first].focus()})}
function openRelease(slug){view='players';resetGrid('Плееры');request('/anime/'+encodeURIComponent(slug),function(r){release=r;$('heading').textContent=r.title;$('description').textContent=(r.description||'').replace(/<[^>]*>/g,'').slice(0,650);request('/anime/'+encodeURIComponent(r.anime_id)+'/videos',function(list){videos=Array.isArray(list)?list:[];groups=[];videos.forEach(function(v){if(!safeUrl(v.iframe_url))return;var d=v.data||{},key=(d.dubbing||'Без названия')+' / '+(d.player||'Плеер'),g=null;for(var i=0;i<groups.length;i++)if(groups[i].key===key)g=groups[i];if(!g){g={key:key,voice:d.dubbing||'Без названия',player:d.player||'Плеер',playerId:d.player_id,videos:[]};groups.push(g)}addEpisode(g.videos,v)});players=[];groups.forEach(function(g){var found=null;for(var i=0;i<players.length;i++)if(players[i].id===String(g.playerId||g.player))found=players[i];if(!found){found={id:String(g.playerId||g.player),name:g.player,groups:[]};players.push(found)}found.groups.push(g)});chosenPlayer=null;renderPlayers()})})}
function focusChoice(index){var bs=$('grid').querySelectorAll('button');if(bs[index])bs[index].focus();else focusFirst()}
function ratingText(anime){
  var score=Number(anime.rating&&anime.rating.average);
  return score>0&&score<=10?score.toFixed(1):'';
}
function showReleaseDetails(){
  var score=ratingText(release);
  $('rating').textContent=score?'Рейтинг YummyAnime · '+score+' / 10':'';
  $('rating').hidden=!score;
  $('synopsis').textContent=String(release.description||'').replace(/<[^>]*>/g,'').trim();
  $('synopsis').hidden=!$('synopsis').textContent;
  $('synopsis').scrollTop=0;
  var poster=$('releasePoster');
  var image=safeUrl(release.poster&&(release.poster.big||release.poster.fullsize||release.poster.medium));
  poster.hidden=!image;
  poster.onerror=function(){poster.hidden=true};
  if(image)poster.src=image;
  else poster.removeAttribute('src');
  $('releaseTitle').textContent=release.title;
  var meta=[release.year,release.type&&release.type.name,release.anime_status&&release.anime_status.title].filter(Boolean);
  $('releaseMeta').textContent=meta.join(' · ');
  $('releaseMeta').hidden=!meta.length;
  $('heading').hidden=true;
  $('releaseCard').hidden=false;
}
function renderPlayers(){view='players';resetGrid(release.title);showReleaseDetails();players.forEach(function(p){button(p.name.replace(/^Плеер\s+/,'')+' · озвучек: '+p.groups.length,function(){chosenPlayer=p;group=null;renderVoices()})});message(players.length?'Выберите плеер':'Источник не предоставил доступные серии для этого релиза');focusChoice(players.indexOf(chosenPlayer))}
function renderVoices(){view='voices';resetGrid(release.title);$('description').textContent=chosenPlayer.name+' → Озвучка';$('grid').className='voice-grid';
chosenPlayer.groups.forEach(function(g){
  var choice=button('',function(){group=g;renderEpisodes()},'choice voice-choice');
  var name=document.createElement('span'),count=document.createElement('small');
  name.textContent=g.voice;count.textContent='серий: '+g.videos.length;
  choice.appendChild(name);choice.appendChild(document.createTextNode(' '));choice.appendChild(count);
});message('Выберите озвучку');focusChoice(chosenPlayer.groups.indexOf(group))}
function renderEpisodes(){view='episodes';resetGrid(release.title);$('description').textContent=group.key;group.videos.sort(function(a,b){return Number(a.index||a.number)-Number(b.index||b.number)}).forEach(function(v){button('Серия '+v.number,function(){play(v)},'choice episode')});message('Выберите серию');focusFirst()}
function command(method,extra){if(!isKodik&&!isCvh&&!isAksor)return;var value={method:method};if(extra)Object.keys(extra).forEach(function(k){value[k]=extra[k]});var f=$('player');if(f&&f.contentWindow)f.contentWindow.postMessage(isAksor?(method==='seek'?{key:'player_seek',value:value.seconds}:{key:method==='play'?'player_play':'player_pause'}):isCvh?value:{key:'kodik_player_api',value:value},playerOrigin)}

function declaredHeight(video){
  var url=safeUrl(video.iframe_url);
  var match=/\/(360|480|540|576|720|1080|1440|2160)p(?=[/?#]|$)/i.exec(url);
  return match?Number(match[1]):0;
}
function addEpisode(list,video){
  for(var i=0;i<list.length;i++){
    if(String(list[i].number)!==String(video.number))continue;
    if(declaredHeight(video)>declaredHeight(list[i]))list[i]=video;
    return;
  }
  list.push(video);
}
var startupTimer, panelTimer, cvhRetryTimer;
function updatePlayIcon(playing){
  var toggle=$('toggle'),label=playing?'Пауза':'Воспроизвести';
  toggle.className=playing?'is-playing':'';
  toggle.setAttribute('aria-label',label);
  toggle.title=label;
}
function hidePanel(){
  clearTimeout(panelTimer);
  $('controls').hidden=true;
  $('showPanel').hidden=false;
  $('showPanel').focus();
}
function showPanel(){
  clearTimeout(panelTimer);
  var wasHidden=$('controls').hidden;
  $('controls').hidden=false;
  $('showPanel').hidden=true;
  if(wasHidden)($('toggle').disabled?$('exitPlayer'):$('toggle')).focus();
  if(!paused)panelTimer=setTimeout(hidePanel,5000);
}
function stopStartupTimer(){
  clearTimeout(startupTimer);
  clearTimeout(cvhRetryTimer);
}
function isCvhSource(){
  return isCvh&&current&&Number(current.data.player_id)===3;
}
function startCvh(frame,attempt){
  if(frame!==$('player')||view!=='player'||!paused)return;
  command('play');
  if(attempt<4)cvhRetryTimer=setTimeout(function(){startCvh(frame,attempt+1)},1500);
}
function watchStartup(){
  stopStartupTimer();
  $('playerState').textContent='Открываем видео…';
  startupTimer=setTimeout(function(){
    showPanel();
    $('playerState').textContent='Если видео не началось, нажмите «Повторить» или выберите другой источник.';
  },12000);
}
function chooseEpisodeSource(){
  var episode=String(current.number), previous=chosenPlayer, voice=group.voice;
  closePlayer();
  view='sources';
  resetGrid(release.title+' · серия '+episode);
  players.forEach(function(player){
    if(player===previous)return;
    var available=[];
    player.groups.forEach(function(option){
      var match=option.videos.filter(function(video){return String(video.number)===episode})[0];
      if(match)available.push({option:option,video:match});
    });
    available.sort(function(a,b){return Number(b.option.voice===voice)-Number(a.option.voice===voice)});
    available.forEach(function(entry){
      button(player.name+' · '+entry.option.voice,function(){
        chosenPlayer=player;
        group=entry.option;
        play(entry.video);
      });
    });
  });
  var hasSources=!!$('grid').firstChild;
  message(hasSources?'Выберите другой источник этой серии':'У этой серии нет другого источника');
  button('Все плееры',renderPlayers);
  focusFirst();
}

function play(v){var url=safeUrl(v.iframe_url);if(!url){message('Нет доступной ссылки плеера');return}current=v;view='player';watchStartup();position=0;duration=0;paused=true;playerOrigin=origin(url);isKodik=/^https:\/\/(?:[a-z0-9-]+\.)?(?:kodikplayer\.com|kodik\.info|kodik\.biz)$/.test(playerOrigin);isCvh=(Number(v.data&&v.data.player_id)===3||Number(v.data&&v.data.player_id)===8)&&playerOrigin==='https://ru.yummyani.me';isAksor=Number(v.data&&v.data.player_id)===1&&playerOrigin==='https://player.aksor.tv';$('frameHolder').textContent='';var f=document.createElement('iframe');f.id='player';f.title='Видео';f.tabIndex=-1;f.setAttribute('allow','autoplay; fullscreen; encrypted-media; picture-in-picture');f.setAttribute('allowfullscreen','');f.src=url;f.onload=function(){if(f!==$('player'))return;if(isCvhSource())startCvh(f,0);else if(isKodik||isCvh||isAksor)command('play');else $('playerState').textContent='Для запуска используйте панель источника.'};$('frameHolder').appendChild(f);$('screen').hidden=false;document.body.className='playing';$('playingTitle').textContent=release.title+' · серия '+v.number+' · '+(v.data&&v.data.dubbing||'');['toggle','rewind','forward'].forEach(function(id){$(id).disabled=!(isKodik||isCvh||isAksor)});updatePlayIcon(false);var index=group.videos.indexOf(v);$('previous').disabled=index<=0;$('next').disabled=index>=group.videos.length-1;if(isCvhSource()){showPanel();$('toggle').focus()}else hidePanel()}
function closePlayer(){clearTimeout(panelTimer);stopStartupTimer();$('frameHolder').textContent='';$('screen').hidden=true;document.body.className='';if(document.fullscreenElement&&document.exitFullscreen){var p=document.exitFullscreen();if(p&&p.catch)p.catch(function(){})}renderEpisodes();var bs=$('grid').querySelectorAll('button'),i=group.videos.indexOf(current);if(bs[i])bs[i].focus()}
function back(){if(view==='player'){closePlayer();return}if(pending){++requestId;pending.abort();pending=null;busy=false}if(view==='sources'){renderEpisodes();return}if(view==='episodes'){renderVoices();return}if(view==='voices'){renderPlayers();return}if(view==='players'){view='catalog';renderCards();var bs=$('grid').querySelectorAll('button');if(bs[catalogFocus])bs[catalogFocus].focus();return}if(window.history.length>1)window.history.back()}
function seek(delta){command('seek',{seconds:Math.max(0,duration?Math.min(duration,position+delta):position+delta)})}
function move(key){var root=view==='player'?$('controls'):document,all=root.querySelectorAll('button,input,#synopsis'),list=[],active=document.activeElement,i;for(i=0;i<all.length;i++)if(!all[i].disabled&&all[i].offsetWidth>0&&all[i].offsetHeight>0)list.push(all[i]);if(!list.length)return;var a=active&&active.getBoundingClientRect(),best=null,score=Infinity;if(a&&list.indexOf(active)>=0){var ax=a.left+a.width/2,ay=a.top+a.height/2;list.forEach(function(b){if(b===active)return;var r=b.getBoundingClientRect(),dx=r.left+r.width/2-ax,dy=r.top+r.height/2-ay,primary=(key===37?-dx:key===39?dx:key===38?-dy:dy),cross=(key===37||key===39)?Math.abs(dy):Math.abs(dx);if(primary<5)return;var s=primary+cross*3;if(s<score){score=s;best=b}})}else best=list[0];if(best){best.focus();if(view!=='player')best.scrollIntoView({block:'nearest'})}}
document.addEventListener('keydown',function(e){var k=e.keyCode;if(e.target.tagName==='INPUT'){if(k===40){e.preventDefault();focusFirst()}else if(k===27||k===461){e.preventDefault();$('catalog').focus()}return}if(k===8||k===27||k===461||k===10009){e.preventDefault();back();return}if(view==='player'){if($('controls').hidden&&(k===13||k>=37&&k<=40)){e.preventDefault();showPanel();return}if(!$('controls').hidden&&!paused){clearTimeout(panelTimer);panelTimer=setTimeout(hidePanel,5000)}if(k===19){e.preventDefault();clearTimeout(cvhRetryTimer);command('pause');return}if(k===415){e.preventDefault();command('play');return}if(k===412||k===417){e.preventDefault();seek(k===412?-10:10);return}}if(view==='players'&&e.target===$('synopsis')&&(k===38||k===40)){
  var synopsis=e.target;
  var canScroll=k===38?synopsis.scrollTop>0:synopsis.scrollTop+synopsis.clientHeight<synopsis.scrollHeight-1;
  if(canScroll){e.preventDefault();synopsis.scrollTop+=(k===38?-1:1)*Math.max(36,Math.floor(synopsis.clientHeight*.65));return}
}if(k>=37&&k<=40){e.preventDefault();move(k)}else if(k===13&&e.target.tagName==='BUTTON'){e.preventDefault();e.target.click()}});
window.addEventListener('message',function(e){var f=$('player');if(!f||e.source!==f.contentWindow||e.origin!==playerOrigin||!e.data||typeof e.data!=='object')return;var d=e.data;if((isCvh||isAksor)&&typeof d.key==='string'&&d.key.indexOf('player_')===0)d={key:'kodik_'+d.key,value:d.value};if(d.key==='kodik_player_time_update'&&typeof d.value==='number')position=d.value;else if(d.key==='kodik_player_duration_update'&&typeof d.value==='number')duration=d.value;else if(d.key==='kodik_player_play'||d.key==='kodik_player_video_started'){stopStartupTimer();$('playerState').textContent='';paused=false;if(!$('controls').hidden)showPanel();updatePlayIcon(true)}else if(d.key==='kodik_player_pause'){paused=true;showPanel();updatePlayIcon(false)}});
$('top').onclick=function(){catalogMode='top';$('query').value='';catalog(true)};
$('random').onclick=function(){
  request('/anime?limit=1&sort=random',function(list){
    if(Array.isArray(list)&&list[0]&&list[0].anime_url)openRelease(list[0].anime_url);
    else message('Не удалось выбрать случайное аниме');
  });
};
$('back').onclick=back;$('catalog').onclick=function(){if(view==='player')closePlayer();catalogMode='catalog';$('query').value='';catalog(true)};$('searchForm').onsubmit=function(e){e.preventDefault();catalogMode='catalog';catalog(true)};$('more').onclick=function(){catalog(false)};$('exitPlayer').onclick=closePlayer;
$('hidePanel').onclick=hidePanel;
$('showPanel').onclick=showPanel;
$('changePlayer').onclick=chooseEpisodeSource;
$('retryPlayer').onclick=function(){if(current)play(current)};
$('toggle').onclick=function(){clearTimeout(cvhRetryTimer);if(paused&&isCvhSource())startCvh($('player'),0);else command(paused?'play':'pause');};$('rewind').onclick=function(){seek(-10)};$('forward').onclick=function(){seek(10)};$('previous').onclick=function(){var i=group.videos.indexOf(current);if(i>0)play(group.videos[i-1])};$('next').onclick=function(){var i=group.videos.indexOf(current);if(i<group.videos.length-1)play(group.videos[i+1])};$('fullscreen').onclick=function(){var s=$('screen'),fn=s.requestFullscreen||s.webkitRequestFullscreen;if(fn){var p=fn.call(s);if(p&&p.catch)p.catch(function(){})}};$('native').onclick=function(){var f=$('player');if(f)f.focus()};catalog(true);
})();
