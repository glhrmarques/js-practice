function cardComponent (title, callToAction) {
    const template = document.getElementById("card-template")
    const clone = template.content.cloneNode(true)

    clone.querySelector(".card-title").textContent = title
    clone.querySelector(".card-button").textContent = callToAction

    document.getElementById("card").appendChild(clone)

}

cardComponent("This is the first title", "button 1")
cardComponent("This is the second title"," btton 2")