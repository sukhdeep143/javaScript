// How to find the largest number in array
// let numbers = [2,4,6,8,9,1,3,6];


let numbers = [2,4,6,8,9,1,3,6];
let largest = numbers[0];

for(let i = 0; i <= numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}

console.log(largest);
