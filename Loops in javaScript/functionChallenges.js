/*
1. Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
 */

function stringToNumber(input) {
  let Num = Number(input);

  if (isNaN(Num)) {
    return "Not a Number";
  }

  return Num;
}

// console.log(stringToNumber("9999"));
// console.log(stringToNumber("qwwer"));
// console.log(stringToNumber("99ureur4928099"));

/*
2. Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

*/
function flipBoolean(input) {
  return !Boolean(input);
}

// console.log(flipBoolean(true))

/*
3. Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
 */

function whatAmI(input) {
  if (!isNaN(input)) {
    return "I'm a number!";
  } else {
    return "I'm a string!";
  }
}

//   console.log(whatAmI("42"));
//   console.log(whatAmI("Hello"));

/*
4. Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/

function isItTruthy(input) {
  return input ? "It's truthy!" : "It's falsey!";
}

// console.log(isItTruthy(1));

// function decrement(a) {
//     let result = a;
//     result -= 1;
//     return result;
// }

// console.log(decrement(19))

// let a = 18;
// let b = 24;

// function add() {
//     const result = a + b;
//     return result;
// }

// function subtract() {
//     const result = b - a;
//     return result;
// }

// function multiply() {
//     const result = a * b;
//     return result;
// }

// function divide() {
//     const result = b / a;
//     return result;
// }

// function increment() {
//     let result = a;
//     result += 1;
//     return result;
// }

// function decrement() {
//     let result = b;
//     result -= 1;
//     return result;
// }

// function reminder() {
//     const result = b % a;
//     return result;
// }

// function filterNumbers(arr) {
//     return arr;
//   }


/*
Task 1: Array Filtering

Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/

function filterNumbers(arr){
    let number = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "string") {
          continue;
        }
        
        number.push(arr[i])
       
      }
      return number;

}
let arr1 = [1, 3, 4, 5, 6, 7, "hi", "one"];


let number = filterNumbers(arr1)

console.log(number)

/*
Task 2: Array Reversal

Write a function reverseArray(arr) that reverses the array

*/

function reverseArray(arr){

    
    return arr.reverse();
}


console.log(reverseArray(arr1));

/*
Task 3: Find Maximum in an Array

Write a function findMax(arr) that returns the largest number in the array


*/

function findMax(arr){
        let num = arr[0];
       for(let i = 0; i < arr.length; i++){
            if(arr[i] > num ){
                num = arr[i];
            }
       }
       return num;
}

let numbers = [1,3,4,5,6,7,8,9];

console.log(findMax(numbers));

/*
Task 4: Remove Duplicates from an Array

Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
 */

function removeDuplicates(arr){
    let newSet = [];
    let seen = [];

    for(let i = 0; i < arr.length; i++){

        if(!seen[arr[i]]){
            newSet.push(arr[i]);
            seen[arr[i]] = true;
        }
    }
    return newSet;
}

// Example usage
let numbers1 = [1, 2, 3, 4, 3, 2, 5, 6, 7, 5, 8];
let uniqueNumbers = removeDuplicates(numbers1);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// Task 5: Flatten a Nested Array

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array


function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten the nested array
            result = result.concat(flattenArray(arr[i]));
        } else {
            // Add the element to the result if it's not an array
            result.push(arr[i]);
        }
    }
    return result;
}

// Example usage
let nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
let flatArray = flattenArray(nestedArray);

console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]



