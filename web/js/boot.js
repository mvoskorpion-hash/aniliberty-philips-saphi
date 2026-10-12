(function () {
  var lastError='', lastKey='не нажата', ready=false;
  function show(message) {
    var box=document.getElementById('philipsDiagnostic');
    if(!box){box=document.createElement('div');box.id='philipsDiagnostic';box.style.cssText='position:fixed;left:3%;right:3%;bottom:4%;z-index:999999;background:#161c2e;color:#fff;border:2px solid #e8272f;padding:18px;font:18px Arial;white-space:pre-wrap;';document.body.appendChild(box);}
    box.textContent='AniLiberty Philips 1.0.4\n'+message+'\nПоследняя кнопка: '+lastKey;
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

