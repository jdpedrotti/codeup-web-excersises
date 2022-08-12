// "use strict";
// The parts of a function
//1. function keyword
//2. The name of the function (name something relevant)
//3. parentheses with zero or more parameters
//4. if more than one parameter, list seperated by commas
//5. Curly braces contain function body
//6, funciton body contains code that runs when the function is invoked
//7. [optional but common] return statement

function sayHello(greeting, name) {
    return `${greeting}, ${name}`;
}

// Here number has local scope
// function localOrGlobal(){
//     let number = 20; console.log(number);
// }
//  console.log(number);

//Here number has global scope
// let number = 20;
// function localOrGlobal(){
//     console.log(number);
// }

// let number = 20;
//
// // function declarations
// function localOrGlobal(){
//     let number = 10;
//     console.log(number);
//     anotherNumber = 23;
// }
// localOrGlobal();
// console.log(number);
// console.log(anotherNumber)

// function expression
// function expressions are NOT hoisted, so this wont work
// bark();
// const bark =  function(){
//     console.log("woof!");
// }

//  function declaration
// function declarations ARE hoisted, so this will work:

// yap();
//
// function yap(){
//     console.log("yip yip");
// }

//  function declaration
// function add(num1, num2){
//     return num1 + num2;
// }

// function expression
// const add = function(num1, num2){
//     return num1 + num2;
// }

//arrow function; do NOT get hoisted
//exactly the same as function expressions
// if using more than one, must use curly braces and return if structured like a function declaration
// if only returning something in one line, do NOT need return keyword

const add = (num1, num2) => num1 + num2;

// only one parameter, do not need parentheses
const addTen = number => number + 10

// if no parameters, then use empty parentheses ()
const helloWorld = () =>"Hello World";

