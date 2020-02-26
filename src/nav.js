import { link } from "fs";
import SwupScrollPlugin from '@swup/scroll-plugin';

// const swup = new Swup();
const swup = new Swup({
    plugins: [new SwupScrollPlugin()]
  });

  

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

navLinks.addEventListener('click',()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});


