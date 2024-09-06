const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")


function handleOptionClick(event) {

    const clickedImage = event.currentTarget

    container.classList.add("start")
}



optionImages.forEach( img => {

img.addEventListener("click", handleOptionClick)

} )







