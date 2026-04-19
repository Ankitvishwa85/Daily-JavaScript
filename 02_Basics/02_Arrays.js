const characters = ["thor", "batman", "ironman"]
const dc_heros = ["superman", "spiderman", "saktiman"]

// characters.push(dc_heros);
// console.log(characters); // print Array inside Array..

// console.log(characters[3]) // inside Array. bcoz its index value is 3.
// console.log(characters[3][1]); // print 1 index element of inside Array..




// const marvels = characters.concat(dc_heros); // don't change the original Array.
// console.log(marvels)

// const All_hero = [...characters, ...dc_heros]  //  seperate Operstor... 
// console.log(All_hero);


 
/*

const otherArray = [1, 2, 3, [4, 5,], 6,[7, 8, [9, 10]]]

console.log(otherArray)

const real_Array = otherArray.flat(Infinity) //seprate All the Array in side the Array in Single Array...
console.log(real_Array)
*/



// Array Checker...

/*
console.log(Array.isArray("Ankit"));

console.log(Array.from("Ankit"));// Convert into Array..
console.log(Array.from(235434578));// not Convert into Array.. It  return empty Array .. but if number written in String then they convert into Array.
console.log(Array.from("2343454534"));

*/


console.log(Array.isArray("Ankit"));
console.log(Array.from("Ankit"));
console.log(Array.from(235434578))
let score = 100
let score2 =200
let score3 =400
console.log(Array.of(score))
console.log(Array.of(score, score2, score3));

