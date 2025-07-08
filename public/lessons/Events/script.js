const header = document.getElementById("title")
const bg = document.getElementById("square")
const buttonEvent = document.getElementById("button")


title.addEventListener('click', function () {
    title.style.color = "#F8F8F8"
})

bg.addEventListener('mousedown', function(){ 
    bg.style.backgroundColor = "red"
})

buttonEvent.addEventListener('mouseout', function(){ 
    buttonEvent.style.backgroundColor = "yellow"
})