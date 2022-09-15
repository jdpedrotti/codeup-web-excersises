// let accessTheDOM = document.getElementById("dc");
// let showMe = accessTheDOM.innerHTML;
// // alert(showMe);
// console.log(showMe);
//
// let marvel = document.getElementById("marvel");
//
// let preference = "dc";
//
// let like = document.getElementById("like");
// let dontLike = document.getElementById("dontLike");
// let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
// console.log(output);
//
// accessTheDOM.innerHTML += marvel.innerHTML;
//
// marvel.setAttribute('class', 'hotpink');
//
// let hotPinks = document.getElementsByClassName('hotpink');
//
//
// for (let i = 0; i < hotPinks.length; i++){
//     hotPinks[i].style.fontSize = "2em";
// }

let submitButton = document.getElementById("colorSubmission");
submitButton.onclick = function(){
    let colorInput = document.getElementById("colorPreference");
    let paragraphs = document.getElementsByTagName("p");        //<-- Elements vs element produces an array, if it said element singular it would just produce the specific item
    for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = colorInput.value;
    }
}

//  <p id="hulk" data-state="hulk" data-strength="super" data-intelligence="low">The Hulk</p>     //<-- data attribute
let theHulk = document.getElementById("hulk");
// let hulkState = theHulk.getAttribute("data-state")
let hulkState = theHulk.dataset.state;
let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The Hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`
// theHulk.innerText = hulkSummary;

let transformButton = document.getElementById("transformHulk");
transformButton.onclick = function (){
    let theHulk = document.getElementById("hulk");
    let hulkState = theHulk.dataset.state;
    let hulkStrength = theHulk.dataset.strength;
    let hulkIntelligence = theHulk.dataset.intelligence;
    if (hulkState === "hulk") {
        theHulk.dataset.state = "Bruce Banner"
    } else {
        theHulk.dataset.state = "hulk"
    }
    theHulk.innerText = `The Hulk is in ${hulkState} state.`
}
