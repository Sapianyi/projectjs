'use strict';

function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done() {
  console.log('Y proshol etot urok');
}

learnJS('J S', done);