//three steps of event handling

//1. get a reference to the element that will trigger the event

// let theButton = document.querySelector("button");


//2. write the function that will be triggered by the event
// a function is a set of instructions. this kind of function triggered by an event is an event handler, aka a callback.
// function contains the instructions that will run when the event is triggered

// function eventHandler(){
//     alert("You clicked me!");
// }

//3. register the handler

// we use addEventListener with two arguments: the type of event and the function that will be triggered

// theButton.addEventListener('click', eventHandler);

// theButton.onclick = eventHandler;


// can write all three steps in one as shown below:
// document.querySelector("button").addEventListener('click', function (){
//     alert('I am a square');
// });



let theSquare = document.querySelector('.square');

let theHandler = function(){
    // alert("I am a square " + window.getComputedStyle(document.querySelector(".square"), null).getPropertyValue('background-color'));
}

theSquare.addEventListener('mousemove', function(e){
    // console.log(e.target.className);
    // let theColor = getComputedStyle(e.target).backgroundColor

//              ^ e tag stands for event
//                can use e.target to target different properties to manipulate the page

    // console.log(theColor);
    // document.getElementById("anotherSquare").style.backgroundColor = theColor;
    alert("Event!");
});

let theButton = document.querySelector('button');

let buttonClickFunction = function(){
    document.querySelector('p').innerText = "You changed me";
}

document.querySelector('body').addEventListener('resize', function(event){
    alert("Free Flashlights! Just sign up for email newsletter!");
    // console.log(getComputedStyle(event.target).backgroundColor);
})

theButton.onclick = buttonClickFunction;

// Get the user input from a form field
let formInput = document.getElementById("formInput");

formInput.onkeyup = function(){
    console.log(formInput.value);
}

let theSquare = document.querySelector('.square');

let theHandler = function (){
    alert("I am a square");
}

