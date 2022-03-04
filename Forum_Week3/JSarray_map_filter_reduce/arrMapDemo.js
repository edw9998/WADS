/*
Array.map()
[*]Performs a function for each array element, and store the results in a new array.
*/
var dollars = [7.0, 6.99, 3.45, 2.25, 14.99]
var toEuros = (dollar) => dollar * 0.85;
var euros = dollars.map(toEuros);

console.log(`Dollars = ${dollars}`, "\n");
console.log(`Euros = ${euros}`);