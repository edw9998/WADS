/*
The two arguments(resolve and reject) in Promises are pre - defined by JavaScript(built - in).

The keyword "async" before a function declaration forces that function to return a promise.

The keyword "await" before a function call forces that function to wait until the promise is resolved.
The await keyword can only be used inside an async function.
*/

async function returnMessage(myMessage, ms_taken){
    let myPromise = new Promise(function(resolve, reject){
        // the resolve function must be nested in another new function in order to work.
        setTimeout(function(){resolve(String(myMessage));}, ms_taken);
    });

    document.getElementById("myPtag").innerHTML = await myPromise;
}

// set timeout to 5000ms(5s).
returnMessage("I hate my life so much :(", 5000);