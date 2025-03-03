/*
This key word is very intresting `this`

bind
this
call
apply
*/



const person ={
    name : "Sukhdeep",

    greetPerson(){
        console.log( `Hello this is a ${this.name}`);
        
    }
}

person.greetPerson();

const other1 = person.greetPerson

const other = person.greetPerson.bind({
    name : "mani"
})

other()
other1()




