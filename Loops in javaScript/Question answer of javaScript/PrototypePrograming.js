/* 
Prototypes in JavaScript
Task: Prototype Chaining

Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
*/


// Constructor function for Animal
function Animal() {}

// Adding method to Animal prototype
Animal.prototype.speak = function () {
    return 'Animal speaking';
};

// Constructor function for Dog
function Dog() {}

// Inheriting from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding method to Dog prototype
Dog.prototype.bark = function () {
    return 'Woof!';
};

// Demonstrating the prototype chain
const myDog = new Dog();
console.log(myDog.speak()); // Inherited from Animal -> "Animal speaking"
console.log(myDog.bark());  // Defined in Dog -> "Woof!"

console.log(myDog instanceof Dog);    // true
console.log(myDog instanceof Animal); // true
