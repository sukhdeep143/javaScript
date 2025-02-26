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

// Example 6 

document.getElementById("ClickMeToKnowEventHandling").addEventListener("click", function(){
   alert("On Click")
})

document.getElementById("MouseHover").addEventListener("mouseover", function(){
   alert("You have hover over the button")
})

document.getElementById("Dbclick").addEventListener("dblclick", function(){
   alert("You clicked two time to work with this button")
})


// Example 7

document.getElementById("tealist").addEventListener("click", function(event){
   if(event.target && event.target.matches(".teaItem")){
      alert(`you have Selected ${event.target.textContent}`)
   }
})

// Example 8 

document.getElementById("feedbackForm").addEventListener("submit", function(event){
   event.preventDefault();
   let feedback = document.getElementById("FeedbackInput").value;
   console.log(feedback);
   document.getElementById("FeedbackDisplay").textContent = `feedback for get the value: ${feedback}`
})

// Example 9 

document.addEventListener("DOMContentLoaded", function(){
   document.getElementById("domStatus").textContent = "DOM Content id fully Loaded!!"
})

// Example 10

document.getElementById("toggleHighlight").addEventListener("click", function(){
   let colorAddToText = document.getElementById("descriptionText");
   colorAddToText.classList.toggle("highlight")
   colorAddToText.style.color = "red";


})
