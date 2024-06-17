"use strict";

if (4 == 9) {
  console.log('OK');
} else {
  console.log('Error');
}

const num = 50;
if (num < 49){
  console.log('Error');
} else if (num > 100) {
  console.log('big');
} else {
  console.log('Ok');
}

(num === 50) ? console.log('OK') : console.log('ERROR');


const numS = 50;
switch (numS) {
  case 49: 
    console.log("Nit");
    break;
  case 100:
    console.log('Mnogo');
    break;
  case 50:
    console.log('Ok!');
    break;
  default:
    console.log('...');
}