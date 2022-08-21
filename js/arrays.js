//
// // declaring an array literal:
// // each item in an array is an element
//
let groceryList = ['bread', 'eggs', 'butter', 'milk', 'Blueberry'];
//
//
// // looping over an array: conditional to access last element
//
// for(let i = 0; i < groceryList.length; i++){
//     if(i === groceryList.length -1){
//         console.log("I have to buy " + groceryList[i] + ".")
//
//     } else {
//         console.log("I have to buy " + groceryList[i] + " and ")
//     }
// }

// let parts = ['barrel', 'grip', 'rail', 'trigger'];
//
// for(let i =0; i <parts.length; i++){
//     if(i === parts.length -1){
//         console.log("The last part I need is the: " + parts[i])
//     } else {
//         console.log("I need to buy a " + parts[i])
//     }
// }

let texasCities = ["San Antonio", "Houston", "Dallas", "austin"];
// for (let i =0; i <texasCities.length; i++){
//     if (i % 2 === 1){
//         console.log(texasCities[i] + " is an odd city.")
//     }else {
//         console.log(texasCities[i]);
//     }
// }


function outputArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

//outputArray(texasCities)

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

//forEach loop takes an anonymous function
//the function we pass to the forEach loop has up to three parameters
//the First parameter represents the array elements
// the Second paramenter represents the element index
//  the Third parameter represents the array itself
//the Second and Third parameters are optional

// prices.forEach(function(price, index){
//     console.log("item number " + index + " costs " + price);
// });

//since the function is anonymous, we can use arrow syntax

// prices.forEach((price) => {
//     console.log(price)
// });

// groceryList.push("potatoes", "serranos");       //ADDS item to the end of an array
// console.log(groceryList);
// groceryList.pop();                   // REMOVES item from the end of an array
// console.log(groceryList);
//
// groceryList.unshift("sliced chedder");     // ADDS to beginning of the array
// console.log(groceryList);
// groceryList.shift();
// console.log(groceryList)                         //REMOVES from beginning of the array
//
// let indexOfButter = groceryList.indexOf("butter");
// console.log(indexOfButter);
//
// groceryList[indexOfButter] = "peanut butter";
// console.log(groceryList);
//
// groceryList[0] = "avacadoes";
// console.log(groceryList);
//
// let firstHalfOfGroceryList = groceryList.slice(0, 2);
// console.log(firstHalfOfGroceryList);
// let secondHalfOfGroceryList = groceryList.slice(2);
// console.log(secondHalfOfGroceryList);
//
// firstHalfOfGroceryList.push("butter");
//
// groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
// console.log(groceryList);
//
// groceryList.reverse();
// console.log(groceryList);
//
// groceryList.sort();
// console.log(groceryList);
// console.log(groceryList.reverse());
//
// prices.sort(function (a, b){
//     return a-b;
// })
// console.log(prices);
//
// groceryList[3] = "Blueberries";
// console.log(groceryList);
// console.log(groceryList.sort());
//
//
// // for (i = 0; i < groceryList.length; i++){
// //     groceryList[i] = groceryList[i].toLowerCase();
// // }
// // console.log(groceryList.sort());
//
// groceryList.forEach((item, index, array) => {
//     array[index] = item.toLowerCase();
// })
// console.log(groceryList);

groceryList = groceryList.join(' ').toLowerCase().split(' ').sort();
console.log(groceryList)

let quote = "All the world's a play";
quote = quote.toLowerCase();
let quoteArray = quote.split(' ');
console.log(quoteArray)
quoteArray = quoteArray.reverse();
console.log(quoteArray);
quoteArray.join(' ');
console.log(quote);

function zatannaMagic(string){
    let commandArray = string.toLowerCase().split(" ");
    for (let i = 0; i<commandArray.length; i++){
        commandArray[i] = (commandArray[i].split('').reverse().join(''));
    }
    let command = commandArray.join(' ') + "!";
    return command.charAt(0).toUpperCase() + command.slice(1);
}


