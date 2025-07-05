function createLessonCard(title,description,link) {
    const template = document.getElementById("lesson-card-template")
    const clone = template.content.cloneNode(true)

    clone.querySelector(".lesson-card-title").textContent = title
    clone.querySelector(".lesson-card-description").textContent = description

    const card = clone.querySelector(".lesson-card")
    card.style.cursor = "pointer"

    card.addEventListener('click', () => {
        window.open(link, "_blank")
    })

    document.getElementById("lesson-container").appendChild(clone)
}

createLessonCard("Challenge", "First component created", "challenges/1/challenge-one.html")
createLessonCard("Lesson", "Objects", "lessons/array/index.html")