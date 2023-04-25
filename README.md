# Дипломное задание к курсу «Продвинутый JavaScript в браузере». Chaos Organizer
---


###### tags: `netology` `advanced js in html`

## Легенда

Мы всё больше привыкаем к неформальному формату организации информации, где ключевое — не структура, а удобство и поиск. Примеры: Slack, Telegram, WhatsApp, вплоть до помощников типа Siri или Алиса.

## Основная концепция

Ключевая идея — создать бота, предназначенного для хранения информации, поиска и других сервисов: напоминания, уведомления и интеграции с внешними сервисами.

Назовём это глобальным ботом-органайзером: вы закидывате туда всю информацию, которая вам нужна, а он сортирует, обеспечивает поиск, хранение и напоминание.

## Прототипы

В качестве прототипов для реализации мы предлагаем вам взять функциональность Telegram, WhatsApp, Slack или подобных мессенджеров. Только вместо живого собеседника у вас будет бот.

Скриншот Telegram:

![](https://i.imgur.com/PBvnYge.png)

Скриншот WhatsApp:

![](https://i.imgur.com/Bz9MRkf.png)

Скриншот Slack:

![](https://i.imgur.com/zruESwO.png)

## Анализ

Проанализируйте эти приложения. Если вы не пользуетесь ими, возьмите в качестве примера Viber или другие подобные приложения. Изучите их способы взаимодействия. Продумайте, как вы будете организовывать интерфейс и какие функции реализуете в первую очередь.

## Архитектура

Поскольку вы — автор системы и ключевой её архитектор, вам предстоит самостоятельно решить, какие технологии использовать как на клиентской, так и на серверной стороне. Webpack, Babel, ESLint и AppVeyor для развёртывания обязательны.

Обратите внимание. Heroku:
* будет останавливать ваше приложение: все данные, хранящиеся в памяти, сотрутся;
* при остановке вашего приложения будет удалять все ваши файлы, которые не хранятся в Git.

Несколько советов:
* чтобы каталог хранился в Git и его не приходилось создавать средствами Node.js, поместите в него пустой файл .gitkeep;
* захардкодьте часть демоданных — файлы и данные в памяти, — чтобы было удобно проверять и не приходилось каждый раз загружать файлы.

По организации серверной части не требуется ничего помимо материала лекций. Его должно быть достаточно для реализации всех функций:
* koa (и компания),
* http-event-stream,
* ws.

Данные на сервере для простоты храните в памяти в виде массива или любого другого контейнера, который вам нравится, — `Set`, `Map`.

Не думайте о проблемах, связанных с хранением данных в памяти сервера.

## Ключевые функции

Мы продумали ряд функций, которые обязательно должно включать приложение.

Все функции разбиты на две категории:
1. Обязательные.
1. Дополнительные.

Все функции из `обязательных` должны быть реализованы.
Из `дополнительных` должно быть реализовано **не менее 5**. Вы сами решаете, какие это будут функции.

### Обязательные для реализации функции:

* сохранение в истории ссылок и текстовых сообщений;
* ссылки (`http://` или `https://`) должны быть кликабельны и отображаться, как ссылки;
* сохранение в истории изображений, видео и аудио (как файлов) — через Drag & Drop и через иконку загрузки;
* скачивание файлов на компьютер пользователя;
* ленивая подгрузка: сначала подгружаются последние 10 сообщений, при прокрутке вверх подгружаются следующие 10 и т. д.

### Дополнительные для реализации функции:

* синхронизация: если приложение открыто в нескольких окнах или вкладках, то контент должен быть синхронизирован;
* поиск по сообщениям (интерфейс + реализация на сервере);
* запись видео и аудио, используя API браузера;
* отправка геолокации;
* воспроизведение видео/аудио, используя API браузера;
* установка напоминаний и напоминания через Notification API: `@schedule: 18:04 31.08.2019 «Последний день лета»`;
* отправка команд боту: `@chaos: погода`, бот должен отвечать рандомным прогнозом погоды, интегрироваться с реальными сервисами не требуется, команд должно быть не менее 5;
* закрепление (pin) сообщений: закреплять можно только одно сообщение, оно прикрепляется к верхней части страницы:

![](https://i.imgur.com/1ZANTr0.png)

* добавление сообщения в избранное, должен быть интерфейс для просмотра избранного;
* просмотр вложений по категориям: аудио, видео, изображения, другие файлы (см. боковое меню Telegram);
* работа в офлайн-режиме, при этом загруженные сообщения должны кешироваться и быть доступными после обновления страницы;
* экспорт/импорт истории чата;
* отправка зашифрованных сообщений и файлов (привет crypto-js!) с просмотром расшифрованных (для этого нужно ввести пароль), **эта функция засчитывается за две**;
* архивирование файлов и распаковка (см. zip.js);
* поддержка оформления кода:
  <pre>
  ```
  if (true) {
    console.log('Hello, AHJ!');
  }
  ```
  </pre>

  это должно выглядеть так:
  ```javascript
  if (true) {
    console.log('Hello, AHJ!');
  }
  ```
* поддержка смайликов (emoji);
* поддержка стикеров.


Если вы придумали интересную функцию, но её нет в этом списке, обратитесь к @coursar.

## Требования к оформлению

### Визуальное оформление

Мы не ограничиваем вас в визуальном оформлении. Но оно должно быть таким, чтобы человек, знакомый с Telegram, WhatsApp или Slack, без труда смог разобраться и в вашем приложении.

### Техническое оформление

Всё должно быть оформлено в виде публичного репозитория на GitHub.

Для Frontend обязательно: Webpack, Babel, ESLint и AppVeyor для развёртывания.

Клиентская часть должна быть выложена на GitHub Pages. Не забудьте разместить бейджик сборки и ссылку на развёрнутое приложение либо вместе с серверной на Heroku.

### Документация

Обязательно должен быть файл README.md, в котором описано, какие функции вы реализовали и как ими пользоваться (в картинках).

**Важно**: если функция не описана, она будет считаться отсутствующей.
