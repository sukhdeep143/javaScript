/*
A closures is the combination of finction bundled together withe the references to its surrounding state.

In other words, a closures given a function access to it's outer scope and remember the last value. in javaScript closures are created, at funtion creation time.

*/

//  Example 1

function outerFunction(){
    let count = 5;
    
    return function addNumber(){
        count ++;
        return count;
    }
}

let increment = outerFunction();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());


// Example 2 

function Greet(){
    let name = "Sukhdeep";

    return function message(){
        return `Hello, ${name}!! How are you doing These Days`;

    }
}

let greet = Greet()
console.log(greet());
