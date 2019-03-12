//Carousel
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var slides = document.getElementsByClassName("bannerimgs");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// Dropdown
class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.dropdownbutton');
    this.content = this.element.querySelector('.dropdowncontent');
    this.button.addEventListener('click', () => { 
      this.toggleContent();
    });
  }
  toggleContent() {
    this.content.classList.toggle('dropdownhidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach( dropdown => new Dropdown(dropdown));