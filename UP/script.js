// header
const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("open");
  overlay.classList.toggle("open");
});

let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    smoothTrans();
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    smoothTrans();
    htmlElement.setAttribute("data-theme", "light");
  }
});

let smoothTrans = () => {
  htmlElement.classList.add("transition");

  window.setTimeout(() => {
    htmlElement.classList.remove("transition");
  }, 1000);
};

// Testimonial
const indicator = document.querySelectorAll(".img");
const slider = document.querySelectorAll(".testimonials__content--text");

for(let i=0; i<slider.length; i++){
  indicator[i].addEventListener("click",()=>{
    for(let j=0; j<slider.length; j++){
      slider[j].classList.remove("show");
      indicator[j].classList.remove("indicator");
    }
   slider[i].classList.add("show");
   indicator[i].classList.add("indicator");
  })
}