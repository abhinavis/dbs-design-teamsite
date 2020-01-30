import { link } from "fs";

const swup = new Swup();
// const swup = new Swup({
//     plugins: [new SwupScrollPlugin()]
//   });

  

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");



hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

navLinks.addEventListener('click',()=>{
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("toggle");
    
});

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

