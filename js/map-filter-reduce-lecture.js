const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let output = '';


// prices.forEach((price, index, array) => {
//
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index + 1}. Price $${price}. Tax: $${tax}. Total: $${total}</p>`;
//     console.log(output);
//     $("div").html(output);
//
//     if (index === array.length-1){
//         $("div").append("<p>Thats it!!</p>")
//     }
// });

const pricesAfterTax = prices.map(price =>{
        const tax = (price * 0.0825).toFixed(2);
        const total = (price + parseFloat(tax)).toFixed(2);
        return parseFloat(total);
});
console.log(prices)
console.log(pricesAfterTax);

const doubledArray = prices.map(price => price * 2);
console.log(doubledArray);

// const desserts = ['sherbert', 'whiskey cake', 'cupcake', 'eclair'];
//
// const eatingDessert = desserts.map(dessert => `Eating ${dessert}`);
// eatingDessert.forEach(element => {
//     $("div").append(`<p>${element}</p>`);
// });

// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];

// const mileages = cars.map(car => car.mileage);
// console.log(mileages);
//
// const newObject = cars.map(car => {
//     car.newProp = 'new property';
//     return car;
// });
//
// console.log(cars[0]);


// const under10K = cars.filter(car => car.mileage < 10000);
//
// under10K.forEach(({make, model, mileage}) => {
//     output += `<p>I found a ${make} ${model} with ${mileage} miles</p>`;
//     $("#output").html(output)
// });


// const under10DollarsWithTax = prices.filter(price => price < 10)
//     .map(price => {
//         const tax = (price * 0.0825).toFixed(2);
//         const total = (price + parseFloat(tax)).toFixed(2);
//         return parseFloat(total);
//     });
    // .forEach(price => $("div").append(`<p>${price}</p>`));

//  chained .filter and .map above
// console.log(under10DollarsWithTax);
// console.log(under10DollarsWithTax);


const totalCost = prices.reduce(function (total, price){
   return total + price;
});

console.log(totalCost);

// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// at index 0 it is similar to doing let total = arrayElement[0]

// let total = prices.reduce(function(total, itemPrice, index){
//     console.log(`The index is ${index}, the total is ${total}, the itemPrice is ${itemPrice}`);
//     return total + itemPrice;
// });

// $("#output").append(`<p>The total is ${totalCost}</p>`);

//the function passed to the reduce method takes an extra parameter, the accumulator
//the accumulator is often abbreviated "acc"

// const averagePrice = prices.reduce((function (accumulator, current, index, array){
//     accumulator += current;
//     if (index === array.length-1){
//         return accumulator/array.length;
//     }
//     return accumulator;
// }));


// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

console.log("You have $158.76 in your shopping cart");

const total =  prices.reduce(function (total, priceOfItem){
    return total + priceOfItem;
}, 158.76);

console.log(`Your total cost is ${total.toFixed(2)}.`);


const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.reduce((accumulator, car) =>{
    accumulator.push(car.mileage);
    return accumulator
}, []);
console.log(mileages)


// const highestMileages = cars.reduce((accumulator, car, index, array) =>{
//     accumulator.push(car.mileage);
//     if (index === array.length - 1){
//         return Math.max(...accumulator);
//     } else {
//         accumulator.push(car.mileage);
//         return accumulator
//     }
//
// }, []);
//
// console.log(highestMileages);

const highestMileage = cars.reduce((accumulator, car) => {
    accumulator.push(car.mileage);
    return accumulator;
}, []).reduce((accumulator, mileage) => {
    return Math.max(accumulator, mileage);
});
console.log(highestMileage);

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeOrMore = users.filter(function (language)
{
   return language.languages.length > 2;
});
console.log(threeOrMore);


let userEmail = users.map (function (emails){
    return emails.email
})
console.log(userEmail)

let yearsXP = users.reduce((acc, experience) => {
    return acc + experience.yearsOfExperience
}, 0);
console.log(yearsXP);

let averageXP = yearsXP / users.length;
console.log(averageXP);

let longEmail = users.reduce((current, user) => {
    // if (current.length > user.email.length) {
    //     return current
    // } else {
    //     return user.email
    // }

    //below is shorthand of the above code
    return current.length > user.email.length ? current : user.email;
});
console.log(longEmail);

let userName = users.reduce((list, user) => {
    return list += (user.name + ', ')
}, "Your instructors are: ");
console.log(userName)

let userNames = users.reduce((acc, user, index, usersArray) => {
    return acc + `${acc ? ', ' : 'Your instructors are: '}${user.name}${ (index === (usersArray.length -1)) ? '.' : ''  }`
}, "");
console.log(userNames);


let diffLang = users.reduce ((acc, user) => {
    user.languages.forEach(function (language){
        if (!acc.includes(language)) {
            acc.push(language);
        }
    });
    return acc
}, []);
console.log(diffLang)


