let sayHey = function () {
    let count = 0;
    function hey () {
        if(count < 10) {
            console.log('hey ' + count);
            count++;
        } else {
            clearInterval(theInterval)
        }
    }
    let theInterval = setInterval(hey, 1000);
}

// let count = 0;
// function hey(){
//     if (count < 10){
//         console.log("hey " + count);
//         count++
//     } else {
//         clearInterval(thisTimeItWillStop);
//     }
// }
// let thisTimeItWillStop = setInterval(hey, 1000);

function tenHeys (){
    let count = 0;
    let thisWillStop = setInterval(function (){
        if (count < 10){
            console.log("hey " + count)
            count++
        } else {
            clearInterval(thisWillStop);
        }
    }, 1000);
}

setTimeout(wakeUpUser, 5000);

function wakeUpUser(){
    alert("WAKE UUUUUUPPPP!!!");
}