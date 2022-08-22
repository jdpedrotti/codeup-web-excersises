let currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75,
    description: "cloudy"
}


//
// console.log(currentWeather.temp);
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);


// Use bracket notation to access object property values when you need to use variable-driven property names
// console.log(currentWeather["humidity"]);
// let userChoice = "clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp";
// console.log(currentWeather[userChoice]);

// console.log("The current weather is " + currentWeather.temp);
// if(currentWeather.temp > 95){
//     console.log("It's kind of hot");
// } else {
//     console.log("It's cool today for Texas");
// }

//Loop through an array using a for in loop
// for (let property in currentWeather) {
//     console.log(property + ": " + currentWeather[property]);
// }


// Dynamically add new properties to existing objects
// currentWeather.uvIndex = 9.79
// console.log(currentWeather.uvIndex)


// Arrays of objects

let hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

//Loop over an array of objects

// Using the for loop
// for(let i = 0; i < hourlyWeather.length; i++){
//     console.log(`at ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`);
// }

//Use a forEach loop
hourlyWeather.forEach(function (forecast, index){
    console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`);
});

//forEach loop with arrow syntax
// hourlyWeather.forEach(forecast =>
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`)
// );

//Array of objects where the objects have properties that are objects
let texasInfo = [
    {
        city: "San Antonio",
        latitude: 29.423017,
        longitude: -98.48527,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 77,
            temp: 82.33,
            feels_like: 88.79,
            clouds: 75
        }
    },
    {
        city: "Houston",
        latitude: 29.7915,
        longitude: -95.093,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 68,
            temp: 87.44,
            feels_like: 97.7,
            clouds: 75
        }
    }
];






// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//
//  }

// fighter.attack();

// let monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 6,
//
// }

// Let's create a controller object to handle anything players or game objects do that affects the state of the game. The controller might handle taking user input and calculating the input's effect on the game.

//Dont need to have attacks and defense etc. in the fighter and monster object, because controller now does everything

let controller = {
    attack: function(attacker, defender){
        let defenderHPBeforeAttack = defender.hitPoints
        let damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.hitPoints -= damage;
        view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
    }
}

// view object handles output

let view = {
    displayAttackResults: function (attacker, defender, defenderHPBeforeAttack, damage) {
        console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
        console.log(attacker.name + " attacks!");
        console.log(`${attacker.name} does ${damage} hit points of damage!`);
        console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points`);
        console.log("----------------");
    }
}

let model = {
    fighter: {
        name: "Arata",
        hitPoints: 18,
        maxDamage: 8,
    },

    monster: {
        name: "Goblin",
        hitPoints: 8,
        maxDamage: 6,
    }
}

controller.attack(model.fighter, model.monster);
controller.attack(model.monster, model.fighter);



//Creating objects
// define an empty object and create properties dynamically
let goblin = {};
goblin.name = "Goblin";

//create a function that returns objects

function makeMonster(name, hitPoints, maxDamage){
    return {
        name: name,
        hitPoints: hitPoints,
        maxDamage: maxDamage
    }
}

// model.hobGoblin = makeMonster("Hobgoblin", 11, 11);
// controller.attack(model.hobGoblin, model.fighter);

// use an object constructor

function Monster(name, hitPoints, maxDamage){
    this.name = name;
    this.hitPoints = hitPoints;
    this.maxDamage = maxDamage;
}

model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);

controller.attack(model.hobgoblinCaptain, model.fighter);

for(let property in model){
    console.log(model[property].name);
}



