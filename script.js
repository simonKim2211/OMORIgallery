var currentSlide = 0;
var slides = document.getElementsByClassName("slide");

function sound(){
  var snd = new Audio('images/sound_effect/page photo flip.mp3')//wav is also supported
  snd.volume = 0.2;
  snd.play()//plays the sound
}

function openSlideshow(index) {
  currentSlide = index;
  var slideshow = document.getElementById("slideshow");
  slideshow.style.display = "block";
  var slideshowContent = document.querySelector(".slideshow-content");
  slideshow.style.display = "block";

  setTimeout(function() {
    slideshowContent.style.transform = "translateY(0)";
  }, 10);

  showSlide(currentSlide);
}

function closeSlideshow() {
  var slideshow = document.getElementById("slideshow");
  var slideshowContent = document.querySelector(".slideshow-content");
  slideshowContent.style.transform = "translateY(100%)";

  setTimeout(function() {
    slideshow.style.display = "none";
  }, 500);
}

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  slides[currentSlide].classList.add("active");
}

function prevSlide() {
  var slideshowContent = document.querySelector(".slideshow-content");
  slideshowContent.style.transform = "translateX(-100%)";
  slides[currentSlide].style.left = "-50%";
  slides[currentSlide].style.opacity = 0;

  setTimeout(function() {
    currentSlide = currentSlide - 1;
    showSlide(currentSlide);
    slides[currentSlide].style.left = "50%";
    slides[currentSlide].style.opacity = 1;
    slideshowContent.style.transform = "translateX(0)";
  }, 250);
}

function nextSlide() {
  var slideshowContent = document.querySelector(".slideshow-content");
  slideshowContent.style.transform = "translateX(100%)";
  slides[currentSlide].style.left = "150%";
  slides[currentSlide].style.opacity = 0;

  setTimeout(function() {
    currentSlide = currentSlide + 1;
    showSlide(currentSlide);
    slides[currentSlide].style.left = "50%";
    slides[currentSlide].style.opacity = 1;
    slideshowContent.style.transform = "translateX(0)";
  }, 250);
}

var pageContents = [
  // Content for page 1
  `
  <button class="slideshow-button b1" onclick="openSlideshow(0)" data-slide-index="0"></button>
  <button class="slideshow-button b2" onclick="openSlideshow(1)" data-slide-index="1"></button>
  <button class="slideshow-button b3" onclick="openSlideshow(2)" data-slide-index="2"></button>
  <button class="slideshow-button b4" onclick="openSlideshow(3)" data-slide-index="3"></button>
  <button class="slideshow-button b5" onclick="openSlideshow(4)" data-slide-index="4"></button>
  <button class="slideshow-button b6" onclick="openSlideshow(5)" data-slide-index="5"></button>
  `,
  // Content for page 2
  `
  <button class="slideshow-button b7" onclick="openSlideshow(6)" data-slide-index="6"></button>
  <button class="slideshow-button b8" onclick="openSlideshow(7)" data-slide-index="7"></button>
  <button class="slideshow-button b9" onclick="openSlideshow(8)" data-slide-index="8"></button>
  <button class="slideshow-button b10" onclick="openSlideshow(9)" data-slide-index="9"></button>
  <button class="slideshow-button b11" onclick="openSlideshow(10)" data-slide-index="10"></button>
  <button class="slideshow-button b12" onclick="openSlideshow(11)" data-slide-index="11"></button>
  `,
  // Content for page 3
  `
  <button class="slideshow-button b13" onclick="openSlideshow(12)" data-slide-index="12"></button>
  <button class="slideshow-button b14" onclick="openSlideshow(13)" data-slide-index="13"></button>
  <button class="slideshow-button b15" onclick="openSlideshow(14)" data-slide-index="14"></button>
  <button class="slideshow-button b16" onclick="openSlideshow(15)" data-slide-index="15"></button>
  <button class="slideshow-button b17" onclick="openSlideshow(16)" data-slide-index="16"></button>
  <button class="slideshow-button b18" onclick="openSlideshow(17)" data-slide-index="17"></button>
  `,
  // Add more content for more pages as needed
  `
  <button class="slideshow-button b19" onclick="openSlideshow(18)" data-slide-index="18"></button>
  <button class="slideshow-button b20" onclick="openSlideshow(19)" data-slide-index="19"></button>
  <button class="slideshow-button b21" onclick="openSlideshow(20)" data-slide-index="20"></button>
  <button class="slideshow-button b22" onclick="openSlideshow(21)" data-slide-index="21"></button>
  <button class="slideshow-button b23" onclick="openSlideshow(22)" data-slide-index="22"></button>
  <button class="slideshow-button b24" onclick="openSlideshow(23)" data-slide-index="23"></button>
  `,

  `
  <button class="slideshow-button b25" onclick="openSlideshow(24)" data-slide-index="24"></button>
  <button class="slideshow-button b26" onclick="openSlideshow(25)" data-slide-index="25"></button>
  <button class="slideshow-button b27" onclick="openSlideshow(26)" data-slide-index="26"></button>
  <button class="slideshow-button b28" onclick="openSlideshow(27)" data-slide-index="27"></button>
  <button class="slideshow-button b29" onclick="openSlideshow(28)" data-slide-index="28"></button>
  <button class="slideshow-button b30" onclick="openSlideshow(29)" data-slide-index="29"></button>
  `,

  `
  <button class="slideshow-button b31" onclick="openSlideshow(30)" data-slide-index="30"></button>
  <button class="slideshow-button b32" onclick="openSlideshow(31)" data-slide-index="31"></button>
  <button class="slideshow-button b33" onclick="openSlideshow(32)" data-slide-index="32"></button>
  <button class="slideshow-button b34" onclick="openSlideshow(33)" data-slide-index="33"></button>
  <button class="slideshow-button b35" onclick="openSlideshow(34)" data-slide-index="34"></button>
  <button class="slideshow-button b36" onclick="openSlideshow(35)" data-slide-index="35"></button>
  `,

  `
  <button class="slideshow-button b37" onclick="openSlideshow(36)" data-slide-index="36"></button>
  <button class="slideshow-button b38" onclick="openSlideshow(37)" data-slide-index="37"></button>
  <button class="slideshow-button b39" onclick="openSlideshow(38)" data-slide-index="38"></button>
  <button class="slideshow-button b40" onclick="openSlideshow(39)" data-slide-index="39"></button>
  <button class="slideshow-button b41" onclick="openSlideshow(40)" data-slide-index="40"></button>
  <button class="slideshow-button b42" onclick="openSlideshow(41)" data-slide-index="41"></button>
  `,

  `
  <button class="slideshow-button b43" onclick="openSlideshow(42)" data-slide-index="42"></button>
  <button class="slideshow-button b44" onclick="openSlideshow(43)" data-slide-index="43"></button>
  <button class="slideshow-button b45" onclick="openSlideshow(44)" data-slide-index="44"></button>
  <button class="slideshow-button b46" onclick="openSlideshow(45)" data-slide-index="45"></button>
  <button class="slideshow-button b47" onclick="openSlideshow(46)" data-slide-index="46"></button>
  <button class="slideshow-button b48" onclick="openSlideshow(47)" data-slide-index="47"></button>
  `
  ,
  `<div class = "page page0 active-page" data-content = "page0"></div>`

];

var currentPage = 8; // Track the current page
var pages = document.querySelectorAll(".page"); // Get all page elements

// Update the showPage function to handle the new pages
function showPage(index) {
    if (index >= pages.length) {
        currentPage = 0;
    } else if (index < 0) {
        currentPage = pages.length - 1;
    }

    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active-page");
    }

    pages[currentPage].classList.add("active-page");

    updatePageContent();
}

// Modify the prevPage and nextPage functions to work with the new pages
function prevPage() {
  var pageContainer = document.querySelector(".active-page");
  pageContainer.style.display = "none";
  currentPage--;
  if (currentPage < 0) {
      currentPage = pages.length - 1;
  }
  showPage(currentPage);
  updatePageContent();
}

function nextPage() {
  var pageContainer = document.querySelector(".active-page");
  pageContainer.style.display = "none";
  currentPage++;
  if (currentPage >= pages.length) {
      currentPage = 0;
  }
  showPage(currentPage);
  updatePageContent();
}

function updatePageContent() {
  sound();
  var pageContainer = document.querySelector(".active-page");
  pageContainer.innerHTML = pageContents[currentPage];

  // Update the slideshow buttons within the active page
  var slideshowButtons = pageContainer.querySelectorAll(".slideshow-button");
  
  for (var i = 0; i < slideshowButtons.length; i++) {
    var index = parseInt(slideshowButtons[i].getAttribute("data-slide-index"));
    slideshowButtons[i].setAttribute("onclick", `openSlideshow(${index})`);

  }
  pageContainer.style.display = "grid";
}