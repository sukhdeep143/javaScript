/*

Write a function sumOfN(n) that returns the sum of the first n natural numbers
function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    }
  return sum;
  }
 
function printMultiplicationTable(n) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
    }
  return table;
  }
  
  function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
        }
        }
        return count;
        }
        
        
        Loops
        Task 1: Sum of First N Natural Numbers

Task 2: Multiplication Table

Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4



Task 3: Count Vowels in a String

Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.


*/
// 1
function sumOfN(n) {
  return (n * (n + 1)) / 2;
}

// console.log(sumOfN(5));

// 2
function printMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${n} = `, i * n);
  }
}
// console.log(printMultiplicationTable(10))

// 3

const vowels = ["a", "e", "i", "o", "u"];
const upperVowels = ["A", "E", "I", "O", "U"];

let str = "This is a simple Test String to check the vowels.";

let arr = str.split("");
let count = []; // Move count array outside the loop to store results

for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i]) || upperVowels.includes(arr[i])) {
        count.push(arr[i]); // Add the vowel to the count array
    }
}

console.log("Vowels in the string:", count);
console.log("Total vowels count:", count.length);