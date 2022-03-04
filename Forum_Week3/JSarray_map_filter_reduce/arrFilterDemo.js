/*
Array.filter()
[*]Returns a new array of elements that fulfill the condition within a function.
*/
let ages = [1, 80, 42, 19, 24, 10, 22, 18, 17]

function checkAge(age, idx, arr){
    if(age >= 18){
        return age;
    }
    else{
        // pass.
    }
}

let adults = ages.filter(checkAge);
console.log(`Adults = ${Array(adults)}`);