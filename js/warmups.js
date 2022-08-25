//        8/25/22
// let numbers = [12, 32, 54, 13, 98, 43];
// let total = 0;
// numbers.forEach(function(numbers){
//     total += numbers
// });
// console.log(total/numbers.length);

let array = [5, 10, 15];
function arrayAverage(array){
    let total = 0;
  for (let i =0; i < array.length; i ++){
      if(!isNumber(array[i])){
          return false;
      }
      total += array[i];
  }
    return total/array.length;
}


let stringArray = ["Jabba", "Darth Maul", "Hondo"];

function longestString(arrayOfStrings){
    let longest = '';
    for (let i =0; i <arrayOfStrings.length; i++){
        if(arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
    }
    return longest;
}


// function longestStringInArray(strings) {
//
//     let longStr = strings[0].length
//     let ans = strings[0]
//     for (let i = 1; i < strings.length; i++){
//         let long = strings[i].length;
//         if (long > longStr) {
//             ans = strings[i];
//             longStr = long
//         }
//     }
//     return ans;
// }
