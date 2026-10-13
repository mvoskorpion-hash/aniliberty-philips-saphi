(function () {
  // Draw UI icons instead of relying on emoji fonts absent on SAPHI.
  var icons={
    '🔑':'M8 14a5 5 0 1 1 4-4L21 1M17 5l3 3M14 8l3 3',
    '🔍':'M15 15l6 6M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0',
    '👁':'M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
    '📅':'M4 5h16v16H4zM4 10h16M8 2v6M16 2v6M8 14h2M14 14h2M8 18h2',
    '🕐':'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M12 5v7l4 3',
    '📂':'M2 7V4h8l3 3h9v14H2zM2 11h20',
    '👤':'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M3 22v-3a9 9 0 0 1 18 0v3',
    '🗑':'M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7'
  };
  function replaceIcons(root){
    if(!root||!root.nodeType)return;
    if(root.nodeType===1&&/^(SCRIPT|STYLE|SVG|TEXTAREA|INPUT)$/i.test(root.nodeName))return;
    if(root.nodeType===3){
      var value=root.nodeValue,found=false,key;
      for(key in icons)if(value.indexOf(key)>=0){found=true;break;}
      if(!found)return;
      var fragment=document.createDocumentFragment(),text='',i=0;
      while(i<value.length){
        var symbol=value.substr(i,2);
        if(icons[symbol]){
          if(text){fragment.appendChild(document.createTextNode(text));text='';}
          var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
          svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('width','1em');svg.setAttribute('height','1em');svg.setAttribute('aria-hidden','true');
          svg.setAttribute('style','display:inline-block;vertical-align:-0.12em;overflow:visible;');
          var shape=document.createElementNS('http://www.w3.org/2000/svg','path');
          shape.setAttribute('d',icons[symbol]);shape.setAttribute('fill','none');shape.setAttribute('stroke','currentColor');shape.setAttribute('stroke-width','2');shape.setAttribute('stroke-linecap','round');shape.setAttribute('stroke-linejoin','round');svg.appendChild(shape);fragment.appendChild(svg);
          i+=2;if(value.charCodeAt(i)===65039)i++;
        }else{text+=value.charAt(i++);}
      }
      if(text)fragment.appendChild(document.createTextNode(text));root.parentNode.replaceChild(fragment,root);return;
    }
    var children=Array.prototype.slice.call(root.childNodes);
    for(var j=0;j<children.length;j++)replaceIcons(children[j]);
  }
  replaceIcons(document.body);
  if(window.MutationObserver)new MutationObserver(function(records){
    for(var i=0;i<records.length;i++){
      if(records[i].type==='characterData')replaceIcons(records[i].target);
      else for(var j=0;j<records[i].addedNodes.length;j++)replaceIcons(records[i].addedNodes[j]);
    }
  }).observe(document.body,{childList:true,characterData:true,subtree:true});
  var lastError='', lastKey='не нажата', ready=false;
  function show(message) {
    var box=document.getElementById('philipsDiagnostic');
    if(!box){box=document.createElement('div');box.id='philipsDiagnostic';box.style.cssText='position:fixed;left:3%;right:3%;bottom:4%;z-index:999999;background:#161c2e;color:#fff;border:2px solid #e8272f;padding:18px;font:18px Arial;white-space:pre-wrap;';document.body.appendChild(box);}
    box.textContent='AniLiberty Philips 1.0.5\n'+message+'\nПоследняя кнопка: '+lastKey;
  }
  window.philipsBoot={
    fail:function(message){lastError=String(message);show(lastError);},
    ready:function(){ready=true;var box=document.getElementById('philipsDiagnostic');if(box)box.parentNode.removeChild(box);},
    apiError:function(message){lastError='Не удалось загрузить данные: '+String(message);if(!ready)show(lastError);}
  };
  window.addEventListener('error',function(e){if(e.message)window.philipsBoot.fail(e.message+' (строка '+e.lineno+')');});
  function cancelledPlayback(error){
    return !!error && error.name==='AbortError' && /play\(\).*interrupted/i.test(error.message||'');
  }
  window.philipsPlay=function(video){
    function failed(error){if(!cancelledPlayback(error))window.philipsBoot.fail(error&&error.message||'Не удалось начать воспроизведение');}
    try{var request=video.play();if(request&&request.catch)request.catch(failed);}catch(error){failed(error);}
  };
  window.addEventListener('unhandledrejection',function(e){if(cancelledPlayback(e.reason)){e.preventDefault();return;}window.philipsBoot.fail(e.reason&&e.reason.message||'Ошибка запуска');});
  document.addEventListener('keydown',function(e){lastKey=String(e.keyCode||e.which)+' / '+String(e.key||'');if(document.getElementById('philipsDiagnostic'))show(lastError||'Данные ещё не загрузились');},true);
  setTimeout(function(){if(!ready)show(lastError||'Каталог не загрузился. Проверьте интернет на телевизоре и повторите запуск.');},20000);
  window.philipsKeyEvent=function(e){
    var keys={13:'Enter',37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',8:'Backspace',27:'Escape',461:'Backspace',10009:'Backspace',415:'MediaPlay',19:'MediaPause',413:'MediaStop',412:'MediaRewind',417:'MediaFastForward',10252:'MediaPlayPause'};
    return {key:keys[e.keyCode]||e.key||'',keyCode:e.keyCode,which:e.which,repeat:e.repeat,target:e.target,currentTarget:e.currentTarget,preventDefault:function(){e.preventDefault();},stopPropagation:function(){e.stopPropagation();},stopImmediatePropagation:function(){e.stopImmediatePropagation();}};
  };
  window.philipsRequest=function(url,options){
    return new Promise(function(resolve,reject){
      var xhr=new XMLHttpRequest(),completed=false;
      var timeout=setTimeout(function(){if(completed)return;completed=true;xhr.abort();reject(new Error('Тайм-аут соединения (8 секунд)'));},8000);
      function finish(error){if(completed)return;completed=true;clearTimeout(timeout);if(error){reject(error);return;}var text=xhr.responseText;resolve({status:xhr.status,ok:xhr.status>=200&&xhr.status<300,json:function(){try{return Promise.resolve(JSON.parse(text));}catch(e){return Promise.reject(e);}}});}
      try{
        xhr.open(options.method||'GET',url,true);
        for(var key in options.headers)if(Object.prototype.hasOwnProperty.call(options.headers,key))xhr.setRequestHeader(key,options.headers[key]);
        xhr.onreadystatechange=function(){if(xhr.readyState===4)finish(xhr.status===0?new Error('Нет ответа API: возможны TLS, CORS или недоступность сервиса'):null);};
        xhr.onerror=function(){finish(new Error('Ошибка соединения с API (TLS/CORS/сеть)'));};
        xhr.send(options.body||null);
      }catch(e){finish(e);}
    });
  };
})();

