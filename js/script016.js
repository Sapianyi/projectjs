"use strict";

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  num = 10;
}

showFirstMessage("HI!");
console.log(num);

function calc(a, b) {
  return (a + b);
}
console.log(calc(4, 3));

function ret() {
  let num = 50;
  return num;
}
const anotherNum = ret();
console.log( anotherNum);

const logger = function () {
  console.log("HIHI!");
};
logger();

const calcS = (a, b) => a + b;
