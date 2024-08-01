function add(...rest) {
    // initialize a variable with 0 to keep track of the sum
    let sum = 0;

    // iterate the rest values
    for (let i = 0; i < rest.length; i++){
        // as we go through every number in the rest
        // add the number to the sum
        sum = sum + rest[i];
    }

    // return the sum, which now has the total sum of all the numbers received in the rest variable
    console.log(sum);
}

add(1, 2, 3);
add(2, 2);
add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);