const user = {
    username: 'Ankit',
    price: 299,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to Website`);
        // console.log(this); // current context ke liye baat karta  h
        
    }
}
// user.welcomeMessage()
// user.username = "Amit"
// user.welcomeMessage()

// console.log(this); // output =>{}. bcoz Global scope me koi context nahi h.


// function chai(){
//     let username = "Ankit"
//     console.log(this.username);
    
// }
// chai()

// const chai =function(){
//     let username= "Ankit"
//     console.log(this.username);
    
// }

// Arrow Function...

// const chai =() => {
//     let username= "Ankit"
//     // console.log(this.username);
//     /console.log(this); // output = {}
    
    
// }
// chai()


// const addTwo = (num1, num2) => {
//       return num1  + num2
// }
// console.log(addTwo(32, 45));


// implicit Return....

// const addTwo = (num1, num2) =>  num1  + num2
const addTwo = (num1, num2) =>  (num1  + num2) //Number

const obj = (name) => ({username: "Ankit"}) //Object

// if use {} curly brackets then write Return. And  if use peranthesis() then not write Return..
// console.log(addTwo(32, 45));
// console.log(obj());



