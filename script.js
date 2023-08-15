const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');
const text = "May the Force be with you";
let index = 0;

const main=document.querySelector("main")
let width=window.innerWidth;
const nav=document.querySelector('.nav-container')
const features=document.querySelector(".features-section");
const button_1=document.querySelector(".button-1");
const button_2=document.querySelector(".button-2");

const contact_img=document.querySelector(".contact-img");
console.log(contact_img);
const main_img=document.querySelector(".main-img");
icon_img=document.createElement("img");

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 150); // Adjust the typing speed here
  } else {
    cursorElement.style.display = 'none'; // Hide cursor when typing is complete
  }
}

typeText();


window.addEventListener('DOMContentLoaded',()=>{
 condition(width);
})
window.addEventListener("resize",()=>{
  const rewidth=window.innerWidth;
  condition(rewidth);
})
function condition(width){
  if(width<=700){
    nav.classList.add('sticky-top')
    contact_img.style.display="none"  
    button_1.style.padding="12px 40px"
    main_img.style.display="none";
    
    icon_img.src="Asset/Saly-22.png";
    icon_img.style.width="15rem"
    icon_img.style.margin="90px 95px 0px 95px";
    
    features.style.margin="5px"
    // icon_img.style.display="";
    // icon_img.classList.add('.sec-2 .animate')
    // main.appendChild(icon_img);

    

  }
  else if(width>700){
    nav.classList.remove('sticky-top')
    contact_img.style.display="";
    
    button_1.style.padding="16px 50px"
    main_img.style.display="";

    features.style.margin=""
    
     
     icon_img.style.display="none";

  }

}
const whatsapp = document.getElementById('whatsapp');



const span=document.createElement("span");
span.innerHTML=`<a href="#" class="whatsapp-text" style="text-decoration:none;color:#000;">Contact with US</a>`;


  whatsapp.addEventListener("mouseover", function() {
    
    span.classList.add("whatsapp_hoever",);
    span.classList.remove("whatsapp_remover");
    whatsapp.append(span)
    
  });

  whatsapp.addEventListener("mouseout", function() {
    span.classList.remove("whatsapp_hoever");
    span.classList.add("whatsapp_remover");

    
  });

  //animation block
  let section =document.querySelectorAll('section');
  window.onscroll=()=>{
    section.forEach(sec =>{
      let top=window.scrollY;
      let offset= sec.offsetTop;
      let height=sec.offsetHeight;
      if(top >= offset && top<offset+height){
        sec.classList.add('show-animate');

      }

      // else{
      //   sec.classList.remove('show-animate')
      // }
    } )
  }
//fade function
  let lastScrollTop = 0;

    window.addEventListener("scroll", function(){
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let element = document.querySelector(".fade-in");

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            element.classList.add("visible");
        } else {
            // Scrolling up
            //element.classList.remove("visible");

        }
        
        lastScrollTop = currentScrollTop;
    });