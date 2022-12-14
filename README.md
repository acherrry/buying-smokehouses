# Тестовое задание от Helicon

## Добавление товаров на страницу, отображение общей суммы выбранных товаров

### Обзор применяемых в работе технологий
* _Вёрстка выполнена семантическими тегами_
* _Файловая структура организована по БЭМу_
* _Способы построения сетки - Flexbox_
* _Использование JavaScript_
* _Все изображения оптимизированы_

* _В дальнейшем верстку можно сделать адаптивной с использованием медиазапросов, тогда сайтом будет удобно пользоваться на планшетах и мобильных устройствах_

**Описание**

Проект "Покупка коптилен" выполнен мною в качестве тестового задания при приеме на работу.

Проект создан по техническому заданию - макету в Figma и руководству к выполнению задания, полученному от HR специалиста компании по электронной почте.

В проекте присутствует сущность - карточки с товарами. На карточке представлено название товара, изображение товара, его описание, цена, кнопка добавить в корзину. Часть данных карточки подставдяется непосредственно в разметку html, другая часть - из массива, где информация о товарах заключена в объекты.

Пользователь может нажать кнопку Добавить в корзину, цена отобразится внизу страницы - в блоке Общая сумма. Если пользователь добавит несколько товаров, их цены будут суммированы. На кнопке Добавить в корзину присутствует hover эффект, после клика кнопка дизейблится, надпись на кнопке меняется на Добавлено.

В исходном коде используется стандарт ES6. Сборка проекта осуществляется Webpack. Для того, чтобы сайт корректно работал в устаревших браузерах (новый синтаксис ими не поддерживается), скрипт транспилируется в стандарт ES5, CSS минифицируется, префиксы расставляются автоматически (с помощью Babel и PostCSS).

**Ссылки на макеты в Figma**

* https://www.figma.com/file/ntsve1xnpU7NZNpn1jBJrF/Frontend---Task?node-id=2%3A3

**GitHub Pages**

* [Ссылка на GitHub Pages](https://acherrry.github.io/buying-smokehouses/)
