const buttonTrigger = document.querySelector("#trigger")
const inputText = document.querySelector("#input-text")

buttonTrigger.addEventListener('click', function() {
    if( inputText.value == "" || inputText.value == null) {
    inputText.style.border = "2px solid red"
    } else {
        inputText.style.backgroundColor = "green"
    }
});