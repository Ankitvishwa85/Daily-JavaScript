// Object literals.

const mySym = Symbol("key1")

const JsUser = {
    name: 'Ankit',
    Age: 19,
    [mySym]: "myKey1",// inser Symbol in Object..
    Location: 'Ayodhya',
    email: 'Ankit@google.com',
    isLoggedIn: true
}
/*
console.log(JsUser['name']); // pro method..
console.log(JsUser.name, JsUser.Age);
console.log(JsUser[mySym]);// to print Symbol...
console.log(typeof mySym);
*/

/*
// Change the Value of Key?

JsUser.email = "Ankit@gmail.com";

console.log(JsUser.email);

// Fix the Value of any Key?.

Object.freeze(JsUser);
JsUser.name = 'Amit'

console.log(JsUser);
*/

// Function in Object.
JsUser.greeting = function(){
    console.log("Hello JS User"); 
}
console.log("Hell JAvaScript User");
console.log(JsUser.greeting());

JsUser.wish = function(){
    console.log(`Hello JS Dev. ${this.name}.`);
}
console.log("Hello js user");
console.log(JsUser.wish());
