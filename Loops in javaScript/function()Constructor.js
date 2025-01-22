function person(name, age){

    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log(`Hi this is ${this.name} and i am ${this.age}`);
        
    };
}

// Creating an constructor this construtor can be created using `new` kwyword

const person1 = new person("Sukhdeep singh", 999);
const person2 = new person("Aman singh", 99);


console.log(person1.greet(), person2.greet());

// Another example of construtor 

function book(type){
    this.type = type;

    this.bookType = function(){
        return `The Type of the book is ${this.type}`
    };
}

const bookTypeIS = new book("Computer");

console.log(bookTypeIS);
console.log(bookTypeIS.bookType());

const bookTypeIs2 = new book("Python");

console.log(bookTypeIs2);
console.log(bookTypeIs2.bookType());





