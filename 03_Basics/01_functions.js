function sayMyName(){
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

function AddtwoNumber( number1, number2){
   let result = number1 + number2;
   return result; // After Return no any one lines Are execute.
//    return number1 + number2;
}
const result = AddtwoNumber(23, 65);
console.log("Result is: ", result);


function loginUserMessage(username){
    return `${username} just logged in.`
}
console.log(loginUserMessage("Ankit"));


