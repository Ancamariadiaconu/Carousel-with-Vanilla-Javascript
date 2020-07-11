var slideIndex = 0;
showSlidesAutomatically();


function plusSlides(n) {
  showSlides(slideIndex += n);
}
// function that changes the slides automatically 

function showSlidesAutomatically() {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlidesAutomatically, 5000); // Change image every 5 seconds
}

// function that changes the slides when next button is clicked 

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
 }
//function that shows/hides the navigation section 

function showNavigation(){
  
  let elementWrap  = document.querySelector(".element-wrap");
  let closeElement = document.querySelector(".close-icon");
  let navigationElement = document.querySelector(".navigation-section");
  
  navigationElement.classList.toggle("show-navigation");
  closeElement.classList.toggle("show-close-icon");
  elementWrap.classList.toggle("hide-burger-btn");
 

}

