let numbers = [12, 32, 54, 13, 98, 43];
let total = 0;
numbers.forEach(function(numbers){
    total += numbers
});
console.log(total/numbers.length);


function longestStringInArray(strings) {

    let longStr = strings[0].length
    let ans = strings[0]
    for (let i = 1; i < strings.length; i++){
        let long = strings[i].length;
        if (long > longStr) {
            ans = strings[i];
            longStr = long
        }
    }
    return ans;
}
