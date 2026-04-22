// IIFE = Immediately Invoke Function Expression..

// global scope ke pollution se problem hoti h kai baar to use pollution ko hatane ke liye IFFE ka use karte h..
// (function chai(){
//     console.log(`DB CONNECTION`);
    
// })
// chai()

//() inside function definiton() function call execution..

(function chai(){
    console.log(`DB CONNECTION`);
    
})(); // END OF INVOKE..

(() => {
    console.log(`DB CONNECTION 3`);
    
})()