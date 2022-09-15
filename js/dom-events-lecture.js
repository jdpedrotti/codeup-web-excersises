//three steps of event handling

//1. get a reference to the element that will trigger the event

// let theButton = document.querySelector("button");


//2. write the function that will be triggered by the event
// a function is a set of instructions. this kind of funciton triggered by an event is an event handler, aka a callback.
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

let theHandler = function (){
    alert("I am a square");
}

theSquare.addEventListener('click', theHandler);

