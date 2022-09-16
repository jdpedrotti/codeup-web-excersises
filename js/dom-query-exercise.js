let mainHeader.innerHTML = "JavaScript is Cool";

let theHeader = document.querySelector('.header');

let daszHandler = function (){
    alert("JavaScript is Cool");
}

theHeader.addEventListener('click', daszHandler);
