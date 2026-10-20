const fs=require('fs');
const base=(process.env.SITE_URL||'').replace(/\/$/,'');
if(!/^https:\/\//.test(base))throw Error('SITE_URL must be the HTTPS GitHub Pages URL');
fs.mkdirSync('web/msx',{recursive:true});
fs.writeFileSync('web/msx/start.json',JSON.stringify({name:'AniLiberty Philips SAPHI',version:'1.0.8',parameter:'content:'+base+'/msx/content.json'},null,2));
fs.writeFileSync('web/msx/content.json',JSON.stringify({type:'list',headline:'AniLiberty Philips',template:{type:'separate',layout:'0,0,4,3',color:'msx-glass',imageFiller:'fit',imagePreload:false},items:[{title:'AniLiberty',image:base+'/icon.png',action:'link:'+base+'/?tv=philips&v=108'}]},null,2));
console.log('Prepared MSX launcher for '+base);
