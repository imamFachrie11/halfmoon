
const slides = document.querySelectorAll(".slider .slide");

let slideIndex = 0;
let intervalId


document.addEventListener("DOMContentLoaded", displaySlides);
function displaySlides(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displayImg");
        intervalId = setInterval(nextDisplay, 1000)
    }
   

}

function showSlide(index){

    if(index > slides.length - 1){
        slideIndex = 0;
    }
    else if (index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displayImg");
    })
    slides[slideIndex].classList.add("displayImg");
    console.log(slideIndex)

   
}

function prevDisplay(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
    
}

function nextDisplay(){ 

    slideIndex++;
    showSlide(slideIndex);

}