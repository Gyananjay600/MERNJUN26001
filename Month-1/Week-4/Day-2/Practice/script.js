console.log("Hello, World!");


let arr = [1, 2, 3, 4, 5, 6];

arr.push(7); // Adds 7 to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7]


arr.pop(); // Removes the last element (7) from the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

arr.unshift(-1,0); // Adds -1 and 0 to the beginning of the array
console.log(arr); // Output: [-1, 0, 1, 2, 3, 4, 5, 6]

arr.shift(); // Removes the first element (-1) from the array
console.log(arr); // Output: [0, 1, 2, 3, 4, 5, 6]

console.log(arr.length); // Output: 7
console.log(arr.concat([7, 8, 9])); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 

console.log(arr.slice(2, 5)); // Output: [2, 3, 4] (elements from index 2 to 4)

console.log(arr)
console.log(arr.splice(2, 3, 10, 11)); // start: number, deleteCount: number, ...items: number[] 
//  Output: [2, 3, 4] (elements from index 2 to 4)
console.log(arr); // Output: [0, 1, 10, 11, 5, 6]

console.log(arr.join("-"))

console.log(arr.reverse()) // Output: [6, 5, 11, 10, 1, 0]

console.log(arr.sort((a, b) => a - b)) // Output: [0, 1, 5, 6, 10, 11] (sorted in ascending order)

console.log(arr.toReversed()) // Output: [11, 10, 6, 5, 1, 0] (returns a new array with the elements in reverse order)

console.log(arr)


// function

// types of functions:
// 1. Anonymous function : this is a function without a name, often used as an argument to other functions or assigned to a variable.
// 2. Named function : this is a function with a name, which can be called by its name elsewhere in the code.
// 3. Expression function : this is a function that is defined as part of an expression, such as being assigned to a variable or passed as an argument to another function.
// 4. Arrow function : this is a shorter syntax for writing functions, introduced in ES6, which allows for more concise function expressions and lexical scoping of the `this` keyword.


// Anonymous function

// function() {
//     console.log("This is an anonymous function");
// }


// named function


// function declaration
function myFunction() {
    console.log("This is a named function");
}

// calling the named function

myFunction(); // Output: This is a named function


// Expression function

let myExpressionFunction = function() {
    console.log("This is an expression function");
}
myExpressionFunction(); // Output: This is an expression function
console.log(myExpressionFunction); // Output: [Function: myExpressionFunction]
console.log(typeof myExpressionFunction); // Output: function

// Arrow function

let myArrowFunction = () => {
    console.log("This is an arrow function");
}
myArrowFunction(); // Output: This is an arrow function

// check even numbers only : using expression function

let checkEvenNumbers = function (number) {
    if (number % 2 == 0) {
        console.log(number + " is an even number");
    }
    else {
        console.log(number + " is not an even number");
    }
}

checkEvenNumbers(4); // Output: 4 is an even number
checkEvenNumbers(5); // Output: 5 is not an even number

// higher order function : a function that takes another function as an parameter or returns a another function as a result



function returnFunction() {
    return 30;
}
let result = returnFunction(); // Output: 30
console.log(result); // Output: 30

// higher order function

function hof(func) {

   func(); // calling the function passed as an argument

}
hof(() => {
    console.log("This is a higher order function");
})


// special function of array : map(), filter(), reduce(), forEach(), sort()
// return type of map(), filter(), reduce() is an array, forEach() is undefined, sort() is an array

// forEach() : executes a provided function once for each array element

let arr1 = [1, 2, 3, 4, 5];

arr1.forEach((v, i)=> {

    console.log(v, i); // Output: 1 0, 2 1, 3 2, 4 3, 5 4
 
})

// map() : creates a new array with the results of calling a provided function on every element in the calling array

let updateArray = arr1.map((v,i)=> {
    return v + 2
})
console.log(updateArray); // Output: [3, 4, 5, 6, 7]


// filter() : creates a new array with all elements that pass the test implemented by the provided function

let filteredArray = arr1.filter((v,i)=> {
    return v % 2 == 0
})
console.log(filteredArray); // Output: [2, 4]


// reduce() : executes a reducer function on each element of the array, resulting in a single output value

let sum = arr1.reduce((acc, v) => { // accumulator works as the sum, v is the currentValue
    return acc + v 
}, 0) // initial value of accumulator is 0
console.log(sum); // Output: 15


// sort() : sorts the elements of an array in place and returns the sorted array

let arr2 = [5, 3, 8, 1, 2];
arr2.sort((a, b) => a - b); // sorts in ascending order
console.log(arr2); // Output: [1, 2, 3, 5, 8]

// (a, b) => a - b how it works : if a - b is negative, a comes before b, if a - b is positive, b comes before a, if a - b is 0, the order remains unchanged