let flavor = prompt("Welcome to Codeup icecream. What flavor do you want?");

flavor = flavor.toLowerCase();

// if(flavor === "chocolate") {
//     alert("One chocolate coming right up!");
// } else if (flavor === "vanilla"){
//     alert("One vanilla coming right up!");
// }
// else {
//     alert("We do not have that flavor. Sorry! :(");
// }

// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!");
//         break;
//     default:
//         alert("We do not have that flavor. Sorry! :(")
// }

//let decision = confirm("Are you sure you want to close this page?");
// alert(decision)

// if (decision) {
//     alert("OK, closing the page.")
// } else {
//   alert("OK, keeping page open.")
// }

//(decision)?alert("Closing the page"):alert("Keeping the page open.");

//let number = prompt("Enter a number: ")
// function divisibleByFive(number) {
//      if(number%5 === 0 && number !== null && number !== "") {
//         alert("That number is divisible by 5");
//     } else {
//         alert("That number is not divisible by 5");
//     }
// }

//     function divisibleByFive(number){
//         alert(number % 5 === 0 ? "That number is divisible by 5" : "That number is not divisible by 5");
//         // ternary operator above
// divisibleByFive(prompt("Enter a number: "));

// function alertMVPCustomer (purchaseTotal){
//     if(purchaseTotal > 1000){
//         alert("MVP!")
//     }
// }
//
// alertMVPCustomer(1001);
 function isMVP(purchaseTotal){
     return purchaseTotal >1000;
 }

 let customer1purchase = 1001;

 if (isMVP(customer1purchase)){
     alert("MVP!")
 }
