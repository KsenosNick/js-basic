'use strict';

const url = 'https://purpleschool.ru/course/javascript';

function urlSplit(url) {
  let [protocol, _, domenName, ...path] = url.split('/');
  protocol = protocol.split(':')[0];
  path = '/' + path.join('/');

  console.log(
    `Протокол: ${protocol}, доменное имя: ${domenName}, путь внутри сайта: ${path}`
  );
}

urlSplit(url);
