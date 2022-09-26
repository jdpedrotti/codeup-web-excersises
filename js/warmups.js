//        8/25/22
// let numbers = [12, 32, 54, 13, 98, 43];
// let total = 0;
// numbers.forEach(function(numbers){
//     total += numbers
// });
// console.log(total/numbers.length);

let array = [5, 10, 15];
function arrayAverage(array){
    let total = 0;
  for (let i =0; i < array.length; i ++){
      if(!isNumber(array[i])){
          return false;
      }
      total += array[i];
  }
    return total/array.length;
}


let stringArray = ["Jabba", "Darth Maul", "Hondo"];

function longestString(arrayOfStrings){
    let longest = '';
    for (let i =0; i <arrayOfStrings.length; i++){
        if(arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
    }
    return longest;
}


// function longestStringInArray(strings) {
//
//     let longStr = strings[0].length
//     let ans = strings[0]
//     for (let i = 1; i < strings.length; i++){
//         let long = strings[i].length;
//         if (long > longStr) {
//             ans = strings[i];
//             longStr = long
//         }
//     }
//     return ans;
// }


//          8/29
// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

function calculateTotalStudents(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i].students
    }
    return total;
}

// let numericArray = [8,10,20];
// function arraySum(array){
//     let total =0;
//     for(let i = 0; i <array.length; i++){
//         total += array[i]
//     }
//     return total;
// }
//
// console.log(arraySum(numericArray));

// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}

// const convertToObject = function (nameOfClass, numberOfStudents){
//     return{
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }

const convertToObject = (nameOfClass, numberOfStudents) => {
    return {
        class: nameOfClass,
        numberOfStudents: numberOfStudents
    }
}

// console.log(convertToObject("Intro to programming", 20));

const neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

function desirableNeighborhood(neighborhoodsObject){
    let total = 0;
    for(let i = 0; i < neighborhoodsObject.schools.length; i++){
        total += neighborhoodsObject.schools[i].rating;
    }
    return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low" && total >= 24;
}

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

//whats the cost of each level? level * level * priceOfCan

// need total cost accumulator variable and some kind of level variable that keeps track of what level Im on
// need to keep looping until total cost is > bonus

function beeramid(bonus, price){
    let totalCost = 0;
    let levels = 0;
    while (totalCost < bonus){
        totalCost += levels * levels * price;
        if(totalCost + ((levels + 1) ** 2) > bonus){break;}
        levels++;
    }
    return levels;
}

const attendance = {
    miami: 32789,
    buffalo: 45678,
    portland: 24567
}

// Given attendance object write a function that returns the total attendance across all teams

function totalAttendance (attendanceObject){
    let attendanceArray = Object.values(attendanceObject);
    let total = 0;
   for (let i = 0; i < attendanceArray.length; i++){
       total += attendanceArray[i];
   }
   return total
}

// example below is same warmup, but as a for in loop

// function totalAttendance(attendanceObject){
//     let total = 0;
//     for (const prop in attendance){
//         total += attendance[prop]
//     }
//     return total;
// }

// given attendance object, write a function that returns the average attendance

function averageAttendance(attendanceObject){
    let total = 0;
    for (const prop in attendance){
        total += attendance[prop]
    }
    return total/Object.keys(attendance).length;
}

//      given attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values

function createObject(attendanceObject){
    let total = 0;
    for (const prop in attendance){
        total += attendance[prop]
    }
    return {
        totalAttendance: total,
        averageAttendance: total/Object.keys(attendance).length
    }
}


/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

let address = "8646 Sunny Oaks"

// function convertAddressToObject(addressString){
//     return {
//         streetNumber: addressString.substring(0, addressString.indexOf(' ')),
//         streetName: addressString.substring(addressString.indexOf(' ')+1)
//     }
// }

function convertAddressToObject(addressString){
    let addressArray = addressString.split(' ');
        return {
            streetNumber: addressArray[0],
            streetName: addressArray.slice(1, addressArray.length).join(' ')
    }
}

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

let peopleAndPets = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
]


//  looping over an array of objects

// function totalPets(arrayOfObjects){
//     for (let i = 0; i < arrayOfObjects.length; i++){
//         total2 += arrayOfObjects[i].pets;
//     }
//     return total2;
// }

// function totalPets(arrayOfObjects){
//     let total3 = 0;
//     arrayOfObjects.forEach(function (object){
//         total3 += object.pets
//     });
//     return total3;
// }

function totalPets(arrayOfObjects){
    arrayOfObjects.reduce(function (acc, currentValue){
        return acc + currentValue
    }, 0
    )
}

//     ^^ will be on assessment!!!





// second assessment practice

/** -- Write a function that takes in an input, checks that input,
    and returns true or false depending on some feature of the input (what kind of number, what kind of string, what type of data it is) **/
function checkType(input, feature) {
    let typeCheck = typeof input;
    if (typeCheck === feature) {
        return true;
    } else if (typeof parseFloat(input) === "number" && feature === "number") {
        return `${input} is an alpha numeric string`;
    } else {
        return false;
    }
}
checkType(9);
/** -- Write a function that takes in an input, does something to it,
 and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)**/
function modifyData(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * 2);
    }
}
modifyData([5, 10, 15, 20, 25]);
// -- Write a function that takes in an array and returns the array modified in some way -- certain elements removed,
// certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)
// Work with tutor example:
function arrModified(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toUpperCase());
    }
}
arrModified(["rodrigo", "marquez"]);
// in class example:
myArray = [0, 1, 2, , 3, 4, 5, 6, 7, 8, 9, 10];
function removesOdds(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
// -- Write a function that accepts an array of objects where each object has at least
// one property with a numeric value, be able to return the total or average of the numeric values
function averageNum(arr) {
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i].x;
    }
    avg = sum / arr.length;
    console.log(avg);
}
averageNum([{ x: 2 }, { x: 4 }, { x: 6 }, { x: 8 }]);
/** -- Write a function that accepts a string, breaks down the string into components,
 and returns an object where each component of the string has become the value of a property */
let components = "San Antonio, Texas";
// function that returns an object of {city: san antonio, State: texas}
function breakDown(components) {
    return {
        city: components.split(", ")[0],
        state: components.split(", ")[1],
    };
}
console.log(breakDown(components));
// -- Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string
function lengthStr(str) {
    return str.length;
}
console.log(lengthStr("rodrigo"));
/**  -- Write a function that analyzes a string, returning an object that contains several
 properties with information about the string, example, length, firstLetter, and lastLetter properties */
function detailStr(str) {
    let obj = { length: 0, firstLetter: "", lastLetter: "" };
    obj.length = str.length;
    obj.firstLetter = str.charAt(0);
    obj.lastLetter = str.charAt(str.length - 1);
    return obj;
}
console.log(detailStr("rodrigo"));
/**  -- Write a function that takes in a string and modifies it in some way.
 Example write a function that takes in a string and replaces every instance of the letter e with the number 3,
 and every instance of the letter i with the number 1, and every instance of the letter o with the number 0, and a with 4.  */
function modifyString(str) {
    let mStr = str.split("");
    for (let i = 0; i < mStr.length; i++) {
        if (mStr[i] == "e") {
            mStr[i] = 3;
        } else if (mStr[i] == "i") {
            mStr[i] = 1;
        } else if (mStr[i] == "o") {
            mStr[i] = 0;
        } else if (mStr[i] == "a") {
            mStr[i] = 4;
        }
    }
    console.log(mStr.join(""));
}
modifyString("rodrigo");
/** Write a function that capitalizes every other letter in the string starting with the first letter, counting blank spaces as characters.
 Try the same not counting blank spaces as characters.  Write a function that capitalizes the last letters of every word in a string. */
function capitalizeFirst(str) {
    let mStr = str.split(" ");
    for (i = 0; i < mStr.length; i++) {
        mStr[i] = mStr[i].charAt(0).toUpperCase() + mStr[i].slice(1);
    }
    console.log(mStr.join(" "));
}
capitalizeFirst("my name is rodrigo");
function capitalizeLast(str) {
    let mStr = str.split(" ");
    for (i = 0; i < mStr.length; i++) {
        let len = mStr[i].length;
        let lastChar = mStr[i].charAt(len - 1).toUpperCase();
        mStr[i] = mStr[i].slice(0, len - 1) + lastChar;
    }
    console.log(mStr.join(" "));
}
capitalizeLast("my name is rodrigo");
// /**
//  * Get Sum of People's Budget
//  * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
//  *
//  * Examples
//  *
//  * >> getBudgets([
//  *        { name: "John", age: 21, budget: 23000 },
//  *        { name: "Steve",  age: 32, budget: 40000 },
//  *        { name: "Martin",  age: 16, budget: 2700 }
//  *    ]) ➞ 65700
//  * >> getBudgets([
//  *        { name: "John",  age: 21, budget: 29000 },
//  *        { name: "Steve",  age: 32, budget: 32000 },
//  *        { name: "Martin",  age: 16, budget: 1600 }
//  *    ]) ➞ 62600
//  */
function getBudgets(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i].budget;
    }
    return total;
}
console.log(
    getBudgets([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])
);
// /**
//  * Get Student Top Notes
//  * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
//  * If the student does not have notes then let's assume their top note is equal to 0.
//  *
//  * Examples
//  *
//  * >> getStudentTopNotes([
//  *      {
//  *         id: 1,
//  *         name: "Jacek",
//  *         notes: [5, 3, 4, 2, 5, 5]
//  *       },
//  *      {
//  *         id: 2,
//  *         name: "Ewa",
//  *         notes: [2, 3, 3, 3, 2, 5]
//  *       },
//  *      {
//  *         id: 3,
//  *         name: "Zygmunt",
//  *         notes: [2, 2, 4, 4, 3, 3]
//  *       }
//  *    ]) ➞ [5, 5, 4]
//  */
const students = [
    {
        id: 1,
        name: "Jacek",
        notes: [5, 3, 4, 2, 5, 5],
    },
    {
        id: 2,
        name: "Ewa",
        notes: [2, 3, 3, 3, 2, 5],
    },
    {
        id: 3,
        name: "Zygmunt",
        notes: [2, 2, 4, 4, 3, 3],
    },
];
function getStudentTopNotes(arr) {
    let topNotes = [];
    for (let i = 0; i < arr.length; i++) {
        let max = 0;
        for (let j = 0; j < arr[i].notes.length; j++) {
            if (arr[i].notes[j] < max) continue;
            if (arr[i].notes[j] > max) {
                max = arr[i].notes[j];
            }
        }
        topNotes.push(max);
    }
    return topNotes;
}
console.log(getStudentTopNotes(students));
// /**
//  * TODO:
//  * Remove the Letters ABC
//  * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version.
// If the given string does not contain "a", "b", or "c", return null.
//  *
//  * Examples
//  * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//  * >> removeABC("hello world!") ➞ null
//  * >> removeABC("") ➞ null
//  *
//  * Notes
//  * If the given string does not contain "a", "b", or "c", return null.
//  */
function removeABC(str) {
    let mStr = str.split(" ");
    let isRemoved = false;
    for (let i = 0; i < mStr.length; i++) {
        if (
            mStr[i].includes("a") ||
            mStr[i].includes("b") ||
            mStr[i].includes("c")
        ) {
            isRemoved = true;
        }
        mStr[i] = mStr[i].replace("a", "");
        mStr[i] = mStr[i].replace("b", "");
        mStr[i] = mStr[i].replace("c", "");
    }
    return isRemoved ? mStr.join(" ") : null;
}
console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));
// /**
//  Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.
// Examples...
// removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']
function removeBs(arr) {
    let mArr = [];
    for (let i = 0; i < arr.length; i++) {
        mArr.push(arr[i].toLowerCase().replace("b", ""));
    }
    return mArr;
}
console.log(removeBs(["abc", "ab", "cat", "Bay"]));
//  Write a function that accepts the top three bowling scores and returns the average.
//  1. write a function
//  2. pass in parameters
//  3. 3 scores ( variables)
//  4. return something (number)
let first = 120;
let second = 234;
let third = 90;
function avScores(first, second, third) {
    return (first + second + third) / 3;
}
console.log(avScores(first, second, third));
// Modify the function to accept an array of bowling scores and return the average
let bowlingArr = [120, 234, 90];
function bowlingAv(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(bowlingAv(bowlingArr));
// Write a function that accepts an array of bowling scores and returns the highest
let bowlingScores = [120, 234, 90];
function bowlingHighest(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max) continue;
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(bowlingHighest(bowlingScores));
// Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3 **/
let divisibleByThree = [120, 234, 90];
function highestDivisible(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max) continue;
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    if (max % 3 == 0) {
        return true;
    } else return false;
}
console.log(highestDivisible(divisibleByThree));


// -- Write a function that takes in an input, checks that input, and returns true or false depending on some feature of the input (what kind of number, what kind of string, what type of data it is)
//
// -- Write a function that takes in an input, does something to it, and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)

function doubleNumber(number){
    return number * 2;
}

function upperCase(string){
    return string.toUpperCase();
}

function repeatString(string){
    return string.concat(' ', string);
}


const myArray = [1, 3, 5, 7, 9, 11];

function removeFirstElement(array){
    array.shift();
    return array;
}

function moveFirstToLast(array){
    let firstElement = array.shift();
    array.push(firstElement);
    return array
}

//
// -- Write a function that takes in an array and returns the array modified in some way -- certain elements removed, certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)
//
// -- Write a function that accepts an array of objects where each object has at least one property with a numeric value, be able to return the total or average of the numeric values
//
// -- Write a function that accepts a string, breaks down the string into components, and returns an object where each component of the string has become the value of a property
//
// -- Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string
//
// -- Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties
//
//
// -- Write a function that takes in a string and modifies it in some way.  Example write a function that takes in a string and replaces every instance of the letter e with the number 3, and every instance of the letter i with the number 1, and every instance of the letter o with the number 0, and a with 4.  Write a function that capitalizes every other letter in the string starting with the first letter, counting blank spaces as characters.  Try the same not counting blank spaces as characters.  Write a function that capitalizes the last letters of every word in a string.

    /**
     * Get Sum of People's Budget
     * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
     *
     * Examples
     *
     * >> getBudgets([
     *        { name: "John", age: 21, budget: 23000 },
     *        { name: "Steve",  age: 32, budget: 40000 },
     *        { name: "Martin",  age: 16, budget: 2700 }
     *    ]) ➞ 65700
     * >> getBudgets([
     *        { name: "John",  age: 21, budget: 29000 },
     *        { name: "Steve",  age: 32, budget: 32000 },
     *        { name: "Martin",  age: 16, budget: 1600 }
     *    ]) ➞ 62600
     */


    /**
     * Get Student Top Notes
     * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
     * If the student does not have notes then let's assume their top note is equal to 0.
     *
     * Examples
     *
     * >> getStudentTopNotes([
     *      {
     *         id: 1,
     *         name: "Jacek",
     *         notes: [5, 3, 4, 2, 5, 5]
     *       },
     *      {
     *         id: 2,
     *         name: "Ewa",
     *         notes: [2, 3, 3, 3, 2, 5]
     *       },
     *      {
     *         id: 3,
     *         name: "Zygmunt",
     *         notes: [2, 2, 4, 4, 3, 3]
     *       }
     *    ]) ➞ [5, 5, 4]
     */

    let students =[
            {
                id: 1,
                name: "Jacek",
                notes: [5, 3, 4, 2, 5, 5]
            },
        {
            id: 2,
            name: "Ewa",
            notes: [2, 3, 3, 3, 2, 5]
        },
        {
            id: 3,
            name: "Zygmunt",
            notes: [2, 2, 4, 4, 3, 3]
        }
]

function getStudentTopNotes(arrayOfStudentObjects){
        const topNotes = [];
        arrayOfStudentObjects.forEach(studentObject => {
            topNotes.push(Math.max(...studentObject.notes));
        });
        return topNotes
}

// function getStudentTopNotes(arrayOfStudentObjects) {
//         let topNotes = [];
//         for (let i = 0; i < arrayOfStudentObjects.length; i++){
//             let topNote = arrayOfStudentObjects[i].notes[0];
//             for (let j = 0; j < arrayOfStudentObjects[i].notes.length; j++){
//                 if (arrayOfStudentObjects[i].notes[j] > topNote){
//                     topNote = arrayOfStudentObjects[i].notes[j];
//                 }
//             }
//             topNotes.push(topNote);
//     }
//         return topNotes
// }


    /**
     * TODO:
     * Remove the Letters ABC
     * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
     *
     * Examples
     * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
     * >> removeABC("hello world!") ➞ null
     * >> removeABC("") ➞ null
     *
     * Notes
     * If the given string does not contain "a", "b", or "c", return null.
     */


//     Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.
//
// Examples...
//
// removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']
//
//
//
//
//
// Write a function that accepts the top three bowling scores and returns the average.
//
//     Write a function that accepts the top three bowling scores and returns the average.
// 1. write a function
// 2. pass in parameters
// 3. 3 scores ( variables)
// 4. return something (number)
//
// let first = 120;
// let second = 234;
// let third = 90;
//
// Modify the function to accept an array of bowling scores and return the average
//
// Write a function that accepts an array of bowling scores and returns the highest
//
// Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3

