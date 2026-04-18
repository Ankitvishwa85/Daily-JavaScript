// const name = "Ankit"

// console.log(name);
// console.log(typeof name);

// let Age = 19

// //console.log(name  + Age + " Age");

// console.log(`Hello my name is ${name} and my Age is ${Age}.`); //better than upper ...


const name = "Ankit-Vishwakarma" // Primite String.. Store as a primitive value
const Name = new String('    Ankit-Vishwakarma    ') // Object String ..Store as an Object 

// console.log(Name);
// console.log(Name.length);
// console.log(typeof Name); //object
// console.log(Name.toUpperCase()); 
// console.log(Name.charAt(4)); 
// console.log(Name.indexOf('t')); 



// console.log(name);
// console.log(name.length);
// console.log(typeof name); // String

// console.log(Name === name); // they are not same.. 

const newString = Name.slice(-8, 4)
console.log(newString);
/*
Step-by-Step Breakdown:
1. startIndex hai -8

Jab index minus (-) me hota hai, toh JavaScript string ke end se count karna shuru karta hai.

Iska formula hota hai: Length + Negative Index.

Yaani 17 + (-8) = 9.

Index 9 par letter aata hai 'h' (Vishwakarma ke beech wala 'h').

2. endIndex hai 4

Index 4 par letter aata hai 't' (Ankit ka 't').

3. Ab kya hoga? (The Tricky Part)

Ab JavaScript ko index 9 (start) se lekar index 4 (end) tak jana hai.

Lekin slice() method ka ek rule hai: Yeh hamesha left se right (forward) chalta hai, kabhi ulta (backward) nahi chalta.

Kyunki aapka start position (9) aapke end position (4) se aage hai, JavaScript wapas peeche nahi aayega.

Isi wajah se, JavaScript chup-chap ek empty string "" return kar dega.
*/

const anotherString = Name.trim()
console.log(Name)
console.log(anotherString);//Kisi bhi string ke shuru (start) aur aakhir (end) me se extra spaces (whitespace) ko hatana.

console.log(Name.split('-'));