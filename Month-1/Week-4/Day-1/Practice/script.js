console.log("Hello World");

// loop statement type:
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for in loop
// 5. for of loop

// console.log("Qlith MERN Internship");


for (let i = 0; i <= 10; i++) {
    console.log("Qlith MERN Internship");
}

// while loop

let i = 0;
while (i <= 5) {
    console.log("Gyananjay");
    i++;
}


// do while loop

let j = 1;
do {
    console.log("Bye bye");
    j++;
}while (j <= 5);

// for in loop
// here person is an object and key is a variable which will hold the key of the object.

const person = {
    name: "Gyananjay",
    age: 22,
    city: "Balasore"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for in loop : in array

let fruits = ["apple", "banana", "mango", "orange"];

for (let index in fruits) {
    console.log(index + ": " + fruits[index]);
}

// for of loop

for (let fruit of fruits) {
    console.log(fruit);
}


// String methods

let str = "Hello World       ";
let str2 = 'Hello World2';
let str3 = `Hello World3`;

for (let i of str) {
    console.log(i);
}

// properties

console.log(str.length);

// methods
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("Hello"));
console.log(str.startsWith("Hello"));
console.log(str.endsWith("World"));
console.log(str.replace("World", "Everyone"));
console.log(str.replaceAll("l", "m"));


console.log(str.charAt(0));
console.log(str.indexOf("World"));
console.log(str.slice(0, 5));
console.log(str.trim().length);
console.log(str.split(" "));



