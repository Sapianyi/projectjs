"use strict";

// const arr = [1, 3, 5, 7, 9];
// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);
// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(compareNum);
// console.log(products.join('; '));

const arr = [2, 14, 67, 32, 19];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}