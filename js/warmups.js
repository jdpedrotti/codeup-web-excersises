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

