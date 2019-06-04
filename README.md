# gulp-pug-starter
![Uses](https://img.shields.io/badge/%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B5%D1%82%D1%81%D1%8F-Pug%2C%20SCSS%2C%20ES6-informational.svg)
![GitHub release](https://img.shields.io/github/release/andreyalexeich/gulp-pug-starter.svg?style=flat-square)
![David](https://img.shields.io/david/andreyalexeich/gulp-pug-starter.svg?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/andreyalexeich/gulp-pug-starter.svg?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/andreyalexeich/gulp-pug-starter.svg?style=social)

## Особенности
* именование классов по [БЭМ](https://ru.bem.info/)
* используется БЭМ-структура
* используются препроцессоры [Pug](https://pugjs.org/) и [SCSS](https://sass-lang.com/)
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* используется CSS-сетка [smart-grid](https://github.com/dmitry-lavrik/smart-grid) на основе Bootstrap для быстрой адаптивной вёрстки
* используется жёсткий кодгайд

## Установка
* установите [NodeJS](https://nodejs.org/en/) (если требуется) и [Yarn](https://yarnpkg.com/en/docs/install)
* скачайте сборку в консоли с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/andreyalexeich/gulp-pug-starter.git```
* установите ```gulp``` глобально: ```yarn global add gulp-cli```
* перейдите в скачанную папку со сборкой: ```cd gulp-pug-starter```
* скачайте необходимые зависимости: ```yarn```
* чтобы начать работу, введите команду: ```yarn run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

## Файловая структура

```
gulp-pug-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── pages
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

* Корень папки:
    * ```.babelrc.js``` — настройки Babel
    * ```.bemrc.js``` — настройки БЭМ
    * ```.eslintrc.json``` — настройки ESLint
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```.stylelintrc``` — настройки Stylelint
    * ```.stylelintignore``` – запрет на отслеживание файлов Stylelint'ом
    * ```gulpfile.babel.js``` — настройки Gulp
    * ```webpack.config.js``` — настройки Webpack
    * ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
    * БЭМ-блоки и компоненты: ```src/blocks```
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * JS-файлы: ```src/js```
    * страницы сайта: ```src/pages```
    * SCSS-файлы: ```src/styles```
    * служебные Pug-файлы: ```src/views```
    * конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): ```src/.htaccess```
* Папка ```dist``` - папка, из которой запускается локальный сервер для разработки (при запуске ```yarn run dev```)
* Папка ```gulp-tasks``` - папка с Gulp-тасками

## Команды
* ```yarn run lint:style```: проверить SCSS-файлы
* ```yarn run dev```: запуск сервера для разработки проекта
* ```yarn run build```: собрать проект с оптимизацией без запуска сервера
* ```yarn run build views```: скомпилировать Pug-файлы
* ```yarn run build styles```: скомпилировать SCSS-файлы
* ```yarn run build scripts```: собрать JS-файлы
* ```yarn run build images```: собрать изображения
* ```yarn run build sprites```: собрать спрайты
* ```yarn run build fonts```: собрать шрифты
* ```yarn run build favicons```: собрать фавиконки
* ```yarn run build gzip```: собрать конфигурацию Apache

## Рекомендации по использованию
### Компонентный подход к разработке сайтов
* каждый БЭМ-блок имеет свою папку внутри ```src/blocks/modules```
* папка одного БЭМ-блока содержит в себе один Pug-файл, один SCSS-файл и один JS-файл (если у блока используется скрипт)
    * Pug-файл блока импортируется в файл ```src/views/index.pug``` (или в необходимый файл страницы, откуда будет вызываться блок)
    * SCSS-файл блока импортируется в файл ```src/blocks/modules/_modules.scss```
    * JS-файл блока импортируется в ```src/js/import/modules.js```
### Компоненты
* компоненты (например, иконки, кнопки) оформляются в Pug с помощью примесей
* каждый компонент имеет свою папку внутри ```src/blocks/components```
* папка одного компонента содержит в себе один Pug-файл, один SCSS-файл и один JS-файл
    * Pug-файл компонента импортируется в файл главной страницы ```src/views/index.pug``` (или в необходимый файл страницы, откуда будет вызываться компонент)
    * SCSS-файл компонента импортируется в файл ```src/blocks/components/_components.scss```
    * JS-файл компонента импортируется в файл ```src/js/import/components.js```
### Страницы проекта
* страницы проекта находятся в папке ```src/pages```
    * каждая страница (в том числе главная) наследует шаблон ```src/views/layouts/default.pug```
    * главная страница: ```src/views/index.pug```
### Шрифты
* шрифты находятся в папке ```src/fonts```
    * используйте [форматы](https://caniuse.com/#search=woff) ```woff``` и ```woff2```
    * шрифты подключаются в файл ```src/styles/base/_fonts.scss```
### Изображения 
* изображения находятся в папке ```src/img```
    * изображение для генерации фавиконок должно находиться в папке ```src/img``` и иметь размер не менее ```180px x 180px```
    * изображения автоматически конвертируются в формат ```.webp```. Подробная информация по использованию [тут](https://vk.com/@vk_it-webp).
### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
	* для их загрузки воспользуйтеcь командой ```yarn add package_name```
	* для подключения JS-файлов библиотек импортируйте их в самом начале JS-файла БЭМ-блока (то есть тот БЭМ-блок, который использует скрипт), например: 
	```javascript 
	import $ from "jquery";
	```
	* для подключения стилевых файлов библиотек импортируйте их в файл ```src/styles/main.scss```

## БЭМ
В сборке используется компонентный подход к разработке сайтов по методолгии БЭМ, когда каждый БЭМ-блок имеет свою папку, внутри которой находятся один Pug-файл, один SCSS-файл и
один JS-файл (если у блока используется скрипт). Чтобы вручную не создавать соответствующие папку и файлы, достаточно в консоли прописать следующие команды: 
* ```bem create my-block``` - для создания папки БЭМ-блока, где ```my-block``` - имя БЭМ-блока
* ```bem create my-component -l src/blocks/components``` для создания компонента
* ```bem create my-component -l src/blocks/components && bem create my-block``` - создать всё вместе

Для более удобного написания разметки по БЭМ используется плагин шорткатов для препроцессора Pug. Пример использования:

**Pug**
```jade
header.header
    nav.menu
        a(href="#")._logo Company
        .list
            a._item.-active(href="#") Home
            a._item(href="#") News
            a._item(href="#") Gallery
            a._item(href="#") Partners
            a._item(href="#") About
            a._item(href="#") Contacts
    h1._title Hello, World!
    .myslider._myslider
        ._slide Content
        ._slide.-active Content
        ._slide Content
    p._text Good weather
```
**Результат**
```html
<header class="header">
    <nav class="menu">
        <a class="menu__logo" href="#">Company</a>
        <div class="list">
            <a class="list__item list__item--active" href="#">Home</a>
            <a class="list__item" href="#">News</a>
            <a class="list__item" href="#">Gallery</a>
            <a class="list__item" href="#">Partners</a>
            <a class="list__item" href="#">About</a>
            <a class="list__item" href="#">Contacts</a>
        </div>
    </nav>
    <h1 class="header__title">Hello, World!</h1>
    <div class="myslider header__myslider">
        <div class="myslider__slide">Content</div>
        <div class="myslider__slide myslider__slide--active">Content</div>
        <div class="myslider__slide">Content</div>
    </div>
    <p class="header__text">Good weather</p>
</header>
```

## CSS-сетка smart-grid
В сборщик включена CSS-сетка [smart-grid](https://github.com/dmitry-lavrik/smart-grid) от [Дмитрия Лаврика](https://dmitrylavrik.ru/). Она позволяет избавиться от 
лишних классов в разметке за счёт использования примесей в SCSS и ускоряет адаптивную вёрстку. Конфигурация уже настроена в соответствии с сеткой [Bootstrap](https://getbootstrap.com/). Пример использования:

**SCSS**
```scss
.items{
    @include row-flex();
    @include md(justify-content, center);
 
    .item{
        @include col();
        @include size(3);
        @include size-md(5);
        @include size-xs(10);
    }
}
```
**Результат**
```css
.items {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
}
.items .item {
    box-sizing: border-box;
    margin-left: 15px;
    margin-right: 15px;
    word-wrap: break-word;
    width: calc(100% / 12 * 3 - 30px);
}
@media screen and (max-width: 992px) {
    .items {
        justify-content: center;
    }
    .items .item {
        width: calc(100% / 12 * 5 - 30px);
    }
}
@media screen and (max-width: 576px) {
    .items .item {
        width: calc(100% / 12 * 10 - 30px);
    }
}
```

## Нужен SCSS без Pug?
Используйте [эту](https://github.com/andreyalexeich/gulp-scss-starter/) сборку.

## Нравится проект?
Сообщайте мне о [багах](https://github.com/andreyalexeich/gulp-pug-starter/issues), ставьте звёздочку в правом верхнем углу, [задонатьте](https://www.tinkoff.ru/cardtocard/) мне на пиво :beer:

## Контакты
* ВКонтакте: [@andreyalexeich](https://vk.com/andreyalexeich)
* Telegram: [@andreyalexeich](https://t-do.ru/andreyalexeich)