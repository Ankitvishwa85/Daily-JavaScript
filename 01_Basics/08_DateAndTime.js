// Dates

let MyDate = new Date();

// console.log(MyDate);
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleString());
// console.log(MyDate.toTimeString());
// console.log(MyDate.toLocaleTimeString());

// console.log(typeof MyDate); // Object ...

// let CreateDate = new Date(2023, 10 ,25); // in Js month is Started to 0 not 1...
// console.log(CreateDate.toDateString())

// let NowDate = Date.now()
// console.log(NowDate);  // print total milliseconds from 1 jan 1970 midnight....
// console.log(Date.now()); // same 


// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);  // 4 = April
// console.log(newDate.getDay()); // 0 = sunday
// console.log(newDate.getUTCDay()); // 0 = sunday

//  let newDate = new Date();
//  let hour = newDate.getHours();
//  let minutes = newDate.getMinutes();
//  let seconds = newDate.getSeconds();

//  let fullTime = `${hour}:${minutes}:${seconds}`;
//   console.log(fullTime);

// node 01_Basics/08_DateAndTime.js


let newDate = new Date();

console.log(newDate.toLocaleString('en-IN', {
    weekday: "long",
    month: "long",
     year: "numeric",
    hour: "2-digit",    
    minute: "2-digit",  
    second: "2-digit",  
    timeZone: "Asia/Kolkata"
}));