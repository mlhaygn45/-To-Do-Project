let addButton=document.getElementById("add");
let clear =document.getElementById("clear")

let todocontainer =document.getElementById("todocontainer")
addButton.addEventListener("click",function(){

   let paragraph =document.createElement("p");
paragraph.classList.add("paragraph-stil")
todocontainer.appendChild(paragraph);
paragraph.innerHTML =inputText.value;
inputText.value ="";

paragraph.addEventListener("click", function(){
    paragraph.style.textDecoration ="line-through";

})
paragraph.addEventListener("dblclick", function(){
 
    todocontainer.removeChild(paragraph);

})
   clear.addEventListener("click",function(){ 
    paragraph.remove()
})

}) 

let title=document.getElementById("title")
todocontainer.appendChild(paragraph);
paragraph.innerHTML =inputText.value;


title.style.color="red";
