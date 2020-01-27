const swup = new Swup();

$(window).load(function(){
    if (location.hash) {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 1);
    }
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
  link.classList.toggle("fade");
  });
  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});