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