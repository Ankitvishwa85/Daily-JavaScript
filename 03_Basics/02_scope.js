let a = 100
// const b = 20
// var c = 30

if(true){
    let a = 10
    const b = 20
    // var c = 30

    // console.log('INNER: ',a)

} // it is a block scope.. when its use with function.
// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = 'Ankit'
    // chid function access the parent function. but parent function don't access the child function...
    function two (){
        const website = 'youtube'
        // console.log(username);
        
    }
    // console.log(website);
    two()
    
}
one()


console.log(AddOne(5));

function AddOne(num){
    return num + 1
}
// AddOne(5)

// console.log(AddTwo(5))
const AddTwo = function(num){  // is type ke function ko declaration se pahle Access nahi kar sakte h....
    return num + 2
}
// AddTwo(5)
console.log(AddTwo(5))