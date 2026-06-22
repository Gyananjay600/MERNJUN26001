console.log("Hello World");

// alert("Welcome to JavaScript");

a = 30;
console.log(a);

A = 40;
console.log(A);

Student1 = "Gyana";
console.log(Student1);

_ = 50;
console.log(_);

$ = 60;
console.log($);

// var, let, const
// scope
// global
// function
// block

var a = 10;

console.log(a);

// declare at block level 

{
    var b = 20;
    console.log("block level access : ",b);
}

console.log("global level access : ",b);


// declare at function level: scope is only within the function

function myFunction(){
    var c = 30;
    console.log("function level access : ",c);
}

// console.log("global level access : ",c);

myFunction();

// The way of declaration
// var a = 10; // redeclaration and reassigning is possible
// var a = 20; // redeclaration
// a = 30; // reassigning

var num;
console.log(num); // undefined

num = 100;
console.log(num); // 100

var num1 = 200;
console.log(num1); // 200


// let a = 10; // reassigning is possible but redeclaration is not possible
// let a = 20; // redeclaration is not possible
// a = 30; // reassigning is possible

let num2;
console.log(num2); // undefined

num2 = 300;
console.log(num2); // 300

let num3 = 400;
console.log(num3); // 400



