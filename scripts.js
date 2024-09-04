const optionImages = document.querySelectorAll(".option-image")


function handleOptionClick(event) {

    console.log("event")
}



optionImages.forEach( img => {

img.addEventListener("click", handleOptionClick)

} )







