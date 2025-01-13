/*
1. Reverse a String
Write a function to reverse a given string. 
 
 */


function ReverseString(StringRe){

    return StringRe.split('').reverse().join("");

}

// console.log(ReverseString("Hello world"))


/*
2. Check for Palindrome
Write a function to check if a string is a palindrome.
*/



function stindRe(sting){
    const reversed = sting.split("").reverse().join("");

    return reversed === sting;
}

// console.log(stindRe("madam"))


/*
3.Find the Largest Number in an Array
*/


function findLargest(arr) {
    return Math.max(...arr);
}
// console.log(findLargest([1, 3, 7, 2, 5])); // Output: 7

/*
4.Remove Duplicates from an Array
 */

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// console.log(removeDuplicates([1, 2, 2, 3,4,4,4,4,4,4, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

/*
5.Flatten a Nested Array
 */

function flattenArray(arr) {
    return arr.flat(Infinity);
}
// console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]

/*
6. Check if a Number is Prime
 */

function isPrime(n) {
    // Corner case
    if (n <= 1){
        return false;

    }
  
    // Check from 2 to n-1
    for (let i = 2; i < n; i++){

        if (n % i == 0)
          return false;
    
    }
    return true;
  }
  
  // Driver Code
  
 console.log(isPrime(23));
 console.log(isPrime(20));

  
    // ? console.log("true")
    // : console.log("false");