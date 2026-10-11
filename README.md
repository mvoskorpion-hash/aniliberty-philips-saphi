# AniLiberty для Philips SAPHI

Веб-клиент для Philips 50PUS7506/60, адаптированный из https://github.com/CoreDip/anilibria-tizen-wgt . Исходная ревизия и лицензии: web/UPSTREAM.txt и web/licenses.

В этой сборке нет локального сервера: приложение размещается на GitHub Pages и обращается к HTTPS API AniLiberty напрямую. ПК после публикации не нужен.

## Публикация

Создайте публичный репозиторий aniliberty-philips-saphi, загрузите файлы и в Settings → Pages выберите Source: GitHub Actions. Workflow публикует только web/ и автоматически создаёт MSX JSON с реальным адресом Pages. Адрес опубликованного сайта появится в Actions и Settings → Pages.

Для MSX используйте опубликованный файл msx/start.json с HTTPS. Ссылка запуска через браузер: адрес сайта с ?tv=philips . Запуск MSX через браузер также возможен по https://msx.benzac.de/?start=content:АДРЕС_САЙТА/msx/content.json .

## Проверка

Совместимость отсутствующих JavaScript API, каталог и навигация проверены в Chrome. Меню плеера проверено с тестовыми данными при 960×540, 1280×720 и 1920×1080. На физическом Philips и на опубликованном Pages проверка ещё требуется. Интернет, TLS и CORS API остаются зависимостями работы на телевизоре.
