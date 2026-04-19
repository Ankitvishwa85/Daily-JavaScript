// Array....

// let MyArr = [0, 1, 6, 3, 4, 5];

// console.log(MyArr);
// console.log(MyArr[2]);


// const MyArr = new Array(1, 2, 3, 4, 5);

// console.log(MyArr);

// MyArr.push(7); // Add number in last of Array..
// MyArr.pop() // Remove numerber in last of Array..
// console.log(MyArr);

// MyArr.unshift(6) //Add number in front of Array...
// console.log(MyArr);
// MyArr.shift();  // Remove number in front of Array...
// console.log(MyArr);

//console.log(MyArr.includes(4));//4 is present in Array Are not!
// console.log(MyArr.indexOf(4));//to take the index value of 4.


// const newArr = MyArr.join(); 

// console.log(MyArr);
// console.log(typeof MyArr);
// console.log(newArr);  // this is a string
// console.log(typeof newArr);

// console.log(MyArr === newArr);// false
// console.log(MyArr == newArr);// true


const MyArr = new Array(1, 2, 3, 4, 5);
console.log("A:", MyArr);

const myn1 = MyArr.slice(1,3); //(1, 3) ka kya matlab hai? Index 1 se shuru karo, aur Index 3 se pehle ruk jao. don't  touch original Array.
console.log(myn1);
console.log("B:", MyArr);


const myn2 = MyArr.splice(1,3); // mainuplate the original Array. And take the element to given start to deletCount.. 
console.log("C:", MyArr);
console.log(myn2);
