//typing function
const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');
const text = "May the Force be with you";
let index = 0;
function typeText() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 100); // Adjust the typing speed here
    } else {
      cursorElement.style.display = 'none'; // Hide cursor when typing is complete
    }
  }
  
  typeText();
  //screen optimization
const main=document.querySelector("main")
let width=window.innerWidth;
const nav=document.querySelector('.nav-container')
const features=document.querySelector(".features-section");
const button_1=document.querySelector(".button-1");
const button_2=document.querySelector(".button-2");
