// const userEmail = "Ankit@google.com"
const userEmail = ""

if(userEmail){
    //console.log("Got user email");
    
} else{
    // console.log("Don't have user Email");
    
}
/*
//Falsy Value..
false, 0 , -0, BigInt(0n), Empty String(""), null, undefined, NaN,..
//Truthy Value..
"0", 'false', " ", [], {}, function(){}, 
*/

if (userEmail.length === 0){
    //console.log("Array is Empty");   
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
    
}


//Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10 // o/p => 5
// val1 = null ?? 10 // o/p => 10
// val1 = undefined ?? 15 // o/p => 15
val1 = null ?? 10 ?? 15 // o/p => 10

console.log(val1);


//  Ternary Operator.... 
// condition ? true : false

const iceCreamPrice = 100;

iceCreamPrice >= 80 ? console.log("less than 80"): console.log("you Can buy the iceCream");


