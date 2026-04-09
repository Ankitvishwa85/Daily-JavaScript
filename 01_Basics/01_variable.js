const accounId = 1012344;
let AccounEmail = "ankit@gmail.com"
var Password = "12345"
accountCity = "Jaipur"

accountId = 2;// not Allowed to Assign Again...

AccounEmail ="qweeed@gmail.com";
Password = "23432";
accountCity = "delhi"
 let accounState;


// console.log(accountId);
// console.log(AccounEmail);
// console.log(Password);
// console.log(accountCity);

/*
prefer not to use VAR because of issue in block scope and functional scope.
*/

console.log(accountId);

console.table([accounId, AccounEmail,accountCity,Password, accounState]);// print All element in Table format

console.log(accounState); // undefined... 
