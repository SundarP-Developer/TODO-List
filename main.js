var overlay=document.getElementById("overlay")
var plus=document.getElementById("plusbtn")
var popup=document.getElementById("popup")

plus.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
});

var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(event){
    event.preventDefault()

    overlay.style.display="none"
    popup.style.display="none"
})

//select container,title,author,description

var container=document.getElementById("container")
var add=document.getElementById("add")
var title=document.getElementById("title")
var author=document.getElementById("author")
var description=document.getElementById("description")
var currentEditDiv=null;

add.addEventListener("click",function(event){
    event.preventDefault()

    if(title.value=="" && author.value=="" && description.value==""){
        alert("Please FillOut all the Fields")
        return;
    }

    if (currentEditDiv) { 
        currentEditDiv.querySelector("h2").textContent = title.value; 
        currentEditDiv.querySelector("h5").textContent = author.value; 
        currentEditDiv.querySelector("p").textContent = description.value; 
        currentEditDiv = null;
} 

else{
    var div=document.createElement("div")
    div.setAttribute("class","items")

    div.innerHTML=
        `<h2>${title.value}</h2>
        <h5>${author.value}</h5>
        <p>${description.value}</p>
        <button onclick="del(event)">Delete</button>
        <button onclick="edit(this)" id="edit">Edit</button>`
    
    container.appendChild(div)
}

    overlay.style.display="none"
    popup.style.display="none"

    title.value=""
    author.value=""
    description.value=""

})

function del(event){
    event.target.parentElement.remove()
}

//select the edit button

function edit(button){

    var div2=document.querySelector(".items")
    var div2=button.parentElement;
    var h2=div2.querySelector("h2")
    var h5=div2.querySelector("h5")
    var p=div2.querySelector("p")

    overlay.style.display="block"
    popup.style.display="block"

    title.value=h2.textContent
    author.value=h5.textContent
    description.value=p.textContent 

    currentEditDiv=div2
}