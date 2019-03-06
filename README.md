# gulp-pug-starter

## Особенности
* сборка предназначена для автоматизации задач в повседневной front-end разработке
* автоматическая перезагрузка страницы в браузере с использованием [Browsersync](https://www.browsersync.io/)
* именование классов по [БЭМ](https://ru.bem.info/)
* использование препроцессора [Pug](https://pugjs.org/api/getting-started.html)
* использование препроцессора [SCSS](https://sass-lang.com/)
* использование транспайлера [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* использование [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* использование CSS-сетки [smart-grid](https://github.com/dmitry-lavrik/smart-grid) для быстрой адаптивной вёрстки.

## Установка
Установите [Yarn](https://yarnpkg.com/en/docs/install).

> Yarn - это современная альтернатива npm. Yarn работает с тем же файлом ```package.json``` и так же скачивает необходимые модули в папку ```node_modules```, но делает это намного быстрее.

* скачайте сборку: ```git clone https://github.com/andreyalexeich/gulppack-pug.git```
* установите ```gulp``` глобально: ```yarn global add gulp-cli```
* перейдите в скачанную папку со сборкой: ```cd gulppack-pug```
* введите команду, которая скачает необходимые компоненты для корректной работы нашей сборки, указанные в файле ```package.json```: ```yarn```
* введите команду: ```yarn run dev``` (режим разработки)
* чтобы окончательно собрать проект, введите команду ```yarn run build```.

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.

## Плагины

* [browser-sync](https://browsersync.io/docs/gulp) - живая перезагрузка веб-страницы при внесении изменений в файлы вашего проекта
* [webpack-stream](https://github.com/shama/webpack-stream) - интеграция Webpack с Gulp 
* [eslint](https://eslint.org/) - линтер для JS-файлов
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет вендорные префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — минификация JS-файлов
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) — компиляция Pug в HTML
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SCSS в CSS
* [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) - группировка ```@media```
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) — минификация CSS-файлов
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - карта стилей
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименование файлов, добавление суффиксов и префиксов (например, добавление суффикса ```.min``` к минифицированным файлам)
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) — сжатие изображений PNG, JPG, GIF и SVG (включая дополнительные плагины для оптимизации)
* [gulp-webp](https://www.npmjs.com/package/gulp-webp) - конвертация изображений в современный формат WebP
* [gulp-favicons](https://github.com/evilebottnawi/favicons) — генератор фавиконок для вашего проекта
* [gulp-if](https://www.npmjs.com/package/gulp-if) - запуск заданий только тогда, когда это нужно
* [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) — создание SVG-спрайтов
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) - замена строк
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) — оповещения в командной строке (например, ошибки в SCSS/Sass)
* [gulp-debug](https://www.npmjs.com/package/gulp-debug) — отладка в терминале
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в ваших файлах проекта
* [gulp-clean](https://www.npmjs.com/package/gulp-clean) — удаление файлов и папок
* [yargs](https://www.npmjs.com/package/yargs) - получение аргументов командной строки в Node.js.

## Файловая структура

```
.
├── dist
├── src
│   ├── img
│   ├── js
│   ├── styles
│   └── views
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc
├── .eslintrc.json
└── .gitignore
```

* Корень папки:
	* ```.babelrc``` — настройка ES6
	* ```.eslintrc.json``` — настройка ESLint
	* ```.gitignore``` – запрет на отслеживание файлов Git'ом
	* ```gulpfile.babel.js``` — настройки Gulp
	* ```webpack.config.js``` — настройки Webpack
	* ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
	* Pug-файлы: ```src/views```
	* SCSS-файлы: ```src/styles```
	* JS-файлы: ```src/js```
	* изображения: ```src/img```
	* конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): ```src/.htaccess```
* Папка ```dist``` - папка собранного проекта, из которого запускается сервер (при запуске ```yarn run dev```)

## Рекомендации по использованию
* придерживайтесь изначальной структуры папок и файлов
* придерживайтесь компонентного подхода к разработке сайтов: каждый БЭМ-блок имеет свою папку внутри ```src/modules/```, в которой находятся один Pug-файл, SCSS-файл и 
JS-файл (если у блока используется скрипт)
* все HTML-файлы компилируются в корень ```dist```
* из всех SCSS-файлов компилируется только ```main.scss```. Остальные стилевые файлы импортируются в него
* все сторонние библиотеки устанавливаются в папку ```node_modules```. Для их загрузки воспользуйтеcь командой ```yarn add package_name```, а для подключения используйте файл 
```src/js/main.js``` с помощью ```import```, например: 
```javascript 
import $ from "jquery"
```
Если необходимо подключать стилевые файлы библиотек, импортируйте их в файл ```src/styles/utils/_libs.scss``` с помощью директивы ```@import```
* в вёрстку подключаются только минифицированные CSS и JS-файлы.

## Сборка проекта в режиме разработки
```yarn run dev```

## Окончательная сборка
```yarn run build```

## WebP 
WebP — формат графики, разработанный Google в 2010. Он был создан как альтернатива PNG и JPG и отличается от них гораздо меньшим размером при том же качестве изображения. 
Подробнее [тут](https://habr.com/ru/post/275735/).

## CSS-сетка smart-grid
В данный сборщик включена CSS-сетка [smart-grid](https://github.com/dmitry-lavrik/smart-grid) от [Дмитрия Лаврика](https://dmitrylavrik.ru/), позволяющая избавиться от 
лишних классов в разметке и ускоряющая адаптивную вёрстку. Конфигурация уже настроена в соответствии с сеткой [Bootstrap](https://getbootstrap.com/).

## Нужен SCSS без Pug?
Используйте [эту](https://github.com/andreyalexeich/gulp-scss-starter/) сборку.