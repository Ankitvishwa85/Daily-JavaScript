 // IF =>


    const balance = 1000;
    // if(balance > 500){
    //     console.log(`Balance is greater than 500`);
        
    // }
    // console.log(`Balance is ${balance}`);

    //mplicit Scope..

    // if (balance > 500) console.log("test"),
    // console.log('test2');

    //Nested If...
/*
    if(balance < 500){
        console.log("less than 500")
    }else if (balance < 750){
        console.log("less than 750");
    }else if (balance <900){
        console.log("less than 900");
    }else{
        console.log("less than 1200");
    }*/
    
    
    const userLoggedIn = true
    const debitCard = true
    const LoggedInFromGoogle = true
    loggedInFromEmail = true
    //(&&) And Operator
    if(userLoggedIn && debitCard && 2===3){
        console.log("Allow to buy course")
    };

    if(LoggedInFromGoogle || loggedInFromEmail){
        console.log("User Logged In");
        
    }