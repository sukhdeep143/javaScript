// alert("connceted")
// console.log("JavaScript is connected to the HTML");
//  Example one
document.getElementById("OnClick").addEventListener("click", function(){
    let paragraph = document.getElementById("textToChange");
    paragraph.textContent = "The text has been changed!! you can check the console.log to confirm"
    console.log("Changes are done");
    
})

// Exmaple two

document.getElementById("clickToHighlight").addEventListener("click", function(){
   let cites = document.getElementById("ListItem");
    cites.firstElementChild.classList.add("highlight")
   console.log("yes");
})

// Example 3
document.getElementById("Change_The_Coffee_To_Espresso").addEventListener("click", function(){
   let changeCoffe = document.getElementById("CoffeeType");
   changeCoffe.textContent = "Espresso";
   changeCoffe.style.background = "red"
   changeCoffe.style.padding ="2px";
})

// Example 4
document.getElementById("Adding_an_item").addEventListener("click", function(){
   let newItem = document.createElement("li");
   newItem.textContent = "Head phone";


   document.getElementById("shopping_List").appendChild(newItem);
   
})

// Example 5

document.getElementById("removeLastTask").addEventListener("click", function(){
   let taskList = document.getElementById("TaskList");
   taskList.lastChild.remove();
})




