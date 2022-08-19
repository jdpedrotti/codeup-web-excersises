// //1

// function showMultiplicationTable (){
//     let number = prompt("Enter a number: ")
// for(i =1; i <= 10; i++) {
//     console.log(`${number} * ${i} = ${number * i}`);
//     }
// }
// showMultiplicationTable();


// //2

// for(let i = 1; i <= 10 ; i ++ ){
//     number = Math.floor(Math.random() * (181) + 20);
//     if (number % 2 !== 0) {
//         console.log(`${number} is odd`)
//     }else{
//         console.log(`${number} is even`)
//     }
// }

//3

// // below is loop within loop example
// for(let i = 1; i <= 9; i ++ ){
//     for(let j = 1; j <= i ; j ++){
//         console.log(i)
//     }
// }

// can use built in repeat function to repeat string and achieve same output
// for (let i = 1; i <= 9; i ++) {
//     console.log(i.toString().repeat(i));
// }

//4

// for(let i = 100; i >= 5; i -= 5){
//     console.log(i);
// }

// let string = "";
// for(let i = 0; i < 8; i ++){
//     let word = prompt("Let's make a sentence! Enter a word: ");
//     if(word === "curses"){
//         console.log("That word is not allowed!");
//         continue;
//     }
//     string += " " + word;
//     console.log("Your sentence is: " + string);
// }
