/*

1. Write a `for` loop that loops through the array `["sukh", "mani", "aman","harman" ]` and stops the loop when it finds `"aman"`. and store all  name before `"aman"` in a new array named `my_name`.

*/

const array_name = ["sukh", "mani", "aman", "harman"];

let my_name = [];

for(let i = 0; i < array_name.length; i++){

    if(array_name[i] == "aman"){
        break;
    }
    my_name.push(array_name[i])
}
// console.log(my_name);


/*
2. Write a `for` loop that loops through the array `["Londen", "New York", "Paris", "Berlin"]` and skips `"paris"`.
    store the other cities in a new array named `"visitedCities".
*/

const cities = ["Londen", "New York", "Paris", "Berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++){

    if(cities[i] == "Paris"){
        continue;
    }
    
    visitedCities.push(cities[i]);
}

// console.log(visitedCities);


/*
3. Use a `for-of` loop to iterate through the array `[1,2,3,4,5,6,7,8,9,10]` and stop when the number `5` is found.
    Store the numbers before `4` in arrary named `smallNumber`.

*/


const numbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(typeof(numbers))

let smallNumber = [];

for (const element of numbers) {

    if(element === 5){
        break;
    }

    smallNumber.push(numbers[element])
  
    
}

// console.log(smallNumber)


/*
4. Use a `For-of` loop to iterate throught the array `["Chai", "Pani", "Green Tea", "Pink Tea", "Black Tea", "Read Tea"]` and skip "pink Tea".
    And store reast of the Tea in new array `MyFavTea`.
*/

let TeaTypes = [ "Pink Tea", "Chai", "Pani", "Green Tea", "Pink Tea", "Black Tea", "Read Tea", "Pink Tea"];

let MyfavTea = [];

// console.log(typeof(TeaTypes))

for (const element of TeaTypes) {

    if(element === "Pink Tea"){
        continue;
    }
    MyfavTea.push(TeaTypes[element]);
    // console.log(element)
    
}
// console.log(MyfavTea);

// console.log(typeof(MyfavTea))


/*

5.Use `For-in` loop to loop throught an object containing City population.
    Stop the loop when the population of "Berlin" is found and store all previous cities popolationin a new object named `CityPopulation`.

    citiesPopulation = {
            "Loandon" : 80000,
            "New Yark" : 90000,
            "Paris" : 70000, 
            "Berlin" : 80803

    }
*/

let  citiesPopulation = {
    "Loandon" : 80000,
    "New Yark" : 90000,
    "Paris" : 70000, 
    "Berlin" : 80803
};

let Previous = {};

for (const key in citiesPopulation) {

    if(key === "Berlin"){
        break;
    }
    Previous[key] = citiesPopulation[key]
}


// console.log(Previous);

// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation))


/*
6. Use a `for-in` loop to loop through an object contining city population.
     Skip any city with a poulation below 3 millon and store in a new object `largeCities`.

     let worldCities = {
            "Sydeny" : 500000;
            "Tokyo" : 90000000000;
            "Berlin" : 800000;
            "Paris" : 7999999;
     };

*/

let worldCities = {
    "Sydeny" : 500000,
    "Tokyo" : 90000000000,
    "Berlin" : 800000,
    "Paris" : 7999999
};

let largeCities = {};

for (const key in worldCities) {
    
    if(worldCities[key] < 3000000){
        continue;
    }

    largeCities[key] = worldCities[key]
        
    
}

// console.log(largeCities)/

/*
7. Write a `ForEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
    stop the loop when `"chai"` is found and store all previous tea types in an array named `availableTeas`.
*/

let tea = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTEas = []

// tea.forEach(element => {
 
//     if(element === "chai"){
//         return;
//     }

//     availableTEas.push(element);
// });

for(let i = 0; i < tea.length; i++){
    if(tea[i] === "chai"){
        break ;
    }

    availableTEas.push(tea[i])
}



// console.log(availableTEas)



/*
8. Write a `forEach` loop which itreate the array `["Berlin", "Sydeny", "Tokey", "paris"]`. 
    Skips the `"Sydeny "` and store all the cities in new array naed "LikedCities".
*/

let Cities = ["Berlin", "Sydney", "Tokey", "paris"];
let LikedCities = [];

cities.forEach(element => {
    
    if(element === "Sydney"){
        return;
    }

    LikedCities.push(element)
});

// console.log(LikedCities)


/*
9. Write a `for` loop that iterate throught the array `[2,3,4,7,8]`.
    Skips the `7` and multiply the rest by 2. and store the result in new array.    
*/

let number = [2,3,4,7,8];
let doubledNumber = [];

for(let i = 0; i < number.length; i++){

    if(number[i] === 7){
        continue;

       
    }
    doubledNumber.push(2*number[i])
}

// console.log(doubledNumber);


/*
10. Use a `For-of` loop to iterate throught the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`.
    and stop when the length of the current tea name is greater then 10.
    store the teas iterated over in an array named `shortTeas`.
*/

let arry = ["chai", "green tea", "black tea", "jasmine tea", "herbal"];

let shortTeas = [];

for (const element of arry) {
    
    if(element.length > 10 ){
        continue;
    }

    shortTeas.push(element)
}

// console.log(shortTeas)

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
    // console.log(sum);
    // console.log(i);

}

let arr = [1, 2, 3, 4];
console.log(arr.indexOf(3));