// values: principal, number of years, interest in percentage
// to do: calculate the simple interest
// si = principal * number of years * interest/100
// let values = [100000, 5, 7.5];

// let principal = values[0];
// let years = values[1];
// let interest = values[2];

// console.log(principal * years * interest / 100);

// with destructuring
// let values = [100000, 5, 7.5];

// let [principal, years, interest] = values;

// console.log(principal * years * interest / 100);

// JSON Object: JavaScript Object Notation

// let values = {
//     "principal": 100000,
//     "years": 5,
//     "interest": 7.5
// }

// let values = {
//     0: 100000,
//     1: 5,
//     2: 7.5
// }

// console.log(values);

// console.log(values.interest);

// console.log(values["principal"]); // this will work.
// console.log(values["0"]);

// let values = {
//     "principal": 100000,
//     "years": 5,
//     "interest": 7.5
// }

// // console.log(values.principal);

// const { principal, years, interest } = values;

// console.log(principal * years * interest / 100);

// let values = [100000, 5, 7.5];

// let [p, n, r] = values;

// console.log(p * n * r / 100);

// let values = {
//     "principal": 100000,
//     "years": 5,
//     "interest": 7.5
// }

// const { principal: p, years: n, interest: r } = values;

// console.log(p * n * r / 100);

// let values = [100000, 5, 7.5];

// // let [, , r] = values;

// let [...args] = [...values];

// console.log(args);

let principal = 10000;
let years = 5;
let interest = 7.5;

let values = {
    principal,
    years,
    interest
}

console.log(values);