/*
A JavaScript Promise object contains both the producing code(codeblocks that will take some time to run) 
and calls to the consuming code(codeblocks that wait until producing code has finished running).

A JavaScript Promise object can be:
(*) Pending
(*) Fulfilled
(*) Rejected

The Promise object supports two properties : "state" and "result".
While a Promise object is "pending" (working), the result is undefined.
When a Promise object is "fulfilled", the result is a value.
When a Promise object is "rejected", the result is an error object.

Resulting Promise state is then handled by the method "then()".
Promise.then() takes two arguments, a callback for success and another for failure.
Both are optional, so one may only add a callback for either success or failure only.
*/

// Example case : creating a 5000ms(5s) function timeout to change the value of h1 tag using Promise.
let myPromise = new Promise(function(resolve, reject){
    setTimeout(function() {resolve("Hello World !");}, 5000);
});

myPromise.then(function(val){
    document.getElementById("myH1").innerHTML = val;
});