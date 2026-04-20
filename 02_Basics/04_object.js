// const tinderUser = new Object()// Singleton Object
const tinderUser2 ={} // non Singleton Object 

// console.log(tinderUser);
// console.log(tinderUser2);
tinderUser2.id = "1233abc"
tinderUser2.name = "Ankit"
tinderUser2.loggedIn = true

// console.log(tinderUser2);

const Object2 = {
    fullName: {
        userFullName: {
           firstName: "Ankit",
           lastName: "Vishwak."
        }
    },
    email: "Ankit@gmail.com"
}
// console.log(Object2.fullName.userFullName); // Access another object inside of Object..

const obj1 = {1:'a', 2: 'b', 3: 'c'}
const obj2 = {4:'c', 5: 'd', 6: 'f'}
 

const obj3 = Object.assign({},obj1, obj2);// merge more than one objects and return other object. {} => target and other is source.
// console.log(obj3);

const obj4 = {...obj1, ...obj2} //sepread operator.
// console.log(obj4);


const obj5 = Object.assign(obj1, obj2);
// console.log(obj1); // if we remove the emty object then obj1 is Target and obj2 is Source. All source in target. so obj1 is changed..

// IF some key are same in all objects.

const objA = { name:'Ankit', Age:'19'}
const objB = { lastname:'vishwak.', Age:'29'}

const objC = {...objA, ...objB}  // if some key Are same in objects then during sepration print key value of last object.
//console.log(objC);


// Array Of Objects...

const users = [
    {
        id: '1',
        email: 'Ankit@google.com',
        isLoggedIn: true
    },
    {
         Class: '12th',
         school: 'KIC'
    }
]

// console.log(users[0].id)
// console.log(users[0].email)
// console.log(users[0].isLoggedIn)
// console.log(users[1].Class);
// console.log(users[1].school);


// console.log(Object.keys(tinderUser2)); // keys in Array format..
// console.log(Object.values(tinderUser2)); // Values in Array format..
