// var, let, const - scoping

// const age = 25;

// // update the value of the age
// age = 27;

// console.log(age);

// var age = 25;

// var age = 'twenty five';

// console.log(age);

// let age = 25;

// let age = 'twenty five';

// console.log(age);

// const numbers = [1, 2, 3, 4];

// // numbers[0] = 11;

// // numbers[2] = 13;

// // numbers.pop();
// // numbers.pop();
// // numbers.pop();
// // numbers.pop();

// // numbers.push(13);

// numbers = [3, 4, 5];

// console.log(numbers);

// if (true){
//     var x = 10;
//     x = 15;
//     console.log('inside the block x =', x);
// }

// console.log('outside the block x =', x);

// for (let i = 1; i < 10; i++);
// console.log(i);

function change() {
    var x = 10; // local scope within the function
    x = 15;
    console.log('inside the function x =', x);
}

change();
console.log('outside the function x =', x);