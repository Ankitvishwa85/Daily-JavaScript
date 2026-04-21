function sayMyName() {
    console.log('A');
    console.log('N');
    console.log('K');
    console.log('I');
    console.log('T');
}

// sayMyName();
/*
function AddtwoNumber( number1, number2){
   console.log(number1 + number2);
   
} 
AddtwoNumber(12, 23);
*/

function AddtwoNumber(number1, number2) {
    let result = number1 + number2;
    return result; // After Return no any one lines Are execute.
    //    return number1 + number2;
}
const result = AddtwoNumber(23, 65);
// console.log("Result is: ", result); 


function loginUserMessage(username) {
    return `${username} just logged in.`
}
// console.log(loginUserMessage("Ankit"));





function calculateCartPrice(...num1) {   // here (...) is rest operator...
    return num1;
}

// console.log(calculateCartPrice(200, 3000, 4000, 50000));

function calculateCartPrice2(value1, value2, ...num1) {
    return num1
}
// console.log(calculateCartPrice2(200, 3000, 4000, 50000)); // here output is [4000, 50000] bcoz value1 stored 200 and value2 3000;


const user = {
    username: 'Ankit',
    salary: 29999
}
function handleObject(anyObject) {
    console.log(`My name is ${anyObject.username}  and my salary is ${anyObject.salary}.`)
}
// handleObject(user)
handleObject({
    username: "Amit",
    salary: 31000
})


const us = {
    city: 'california',
    app: 'Amazon'
}
function check(App){
 console.log(`City name is ${App.city} and App is ${App.app}.`)
 return App;
}
 const service = check(us);
 console.log(service);
 



 //Array in Function..

 //const myArray = [200, 300, 400, 500]

 function returnSecondValue(getArray){
    return getArray[1]
 }
 //console.log(returnSecondValue(myArray));
 console.log(returnSecondValue([100, 30, 40, 700]));
 