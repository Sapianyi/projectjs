"use strict";

let num = 20
function showFirstMessage(text) {
  console.log(text);
  num = 10;
}

showFirstMessage('Hello!!!');
console.log(num);

function calc(a, b) {
  return (a + b);
}
console.log(calc(2, 3));


function ret() {
  let num = 50;
  return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function () {
  console.log("Hello!!");
};
logger();

const calc = (a, b) => a + b;

