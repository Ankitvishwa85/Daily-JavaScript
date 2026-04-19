// const score = 400
//               // primitive
// console.log(score);

// const Balance = new Number(100) // Object
// console.log(Balance);
// console.log(Balance.toString().length);
// console.log(Balance.toFixed(2));  // Add Decimal with two zero...


// const otherNumber = 2334.6545;
// console.log(otherNumber.toPrecision(4));  // give precise value of 2334.6545. (2335)ans


// const hundred = 100000
// console.log(hundred.toLocaleString('en-IN')); // print indian format...


// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // =======================MATHS==============================

// console.log(Math)
// console.log(typeof Math) // object

// console.log(Math.abs(-4));  //positive banane ke liye..
// console.log(Math.SQRT2); // Squre root nikalne ke liye.
//  console.log(Math.round(4.5));
//  console.log(Math.ceil(4.2));// next largest integer...
//  console.log(Math.floor(4.9));//previous largest integer...
//  console.log(Math.min(2,4,5,6));
//  console.log(Math.max(2,4,5,8));
 



// RANDOM VALUE.....

console.log(Math.random());

console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))