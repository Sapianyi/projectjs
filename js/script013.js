"use strict";

if (4 == 9){
  console.log('Ok!');
} else{
  console.log('Err!');
}

const num = 50;
if (num < 49){
  console.log("ERR");
} else if (num > 100){
  console.log("Mnogo");
} else{
  console.log("OK");
}

(num === 50) ? console.log('ok!') : console.log("ERR");

switch (num) {
  case 49: 
    console.log('Net');
    break;
  case 100:
    console.log("Mnogo");
    break;
  case 50:
    console.log("Ok");
    break;
  default:
    console.log(">>>");
    break;
}
 