const swup = new Swup();

$(window).load(function(){
    if (location.hash) {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 1);
    }
});

const hamburger = document.querySelector('.hamburger');
const navigation = documnet.querySelector('.navigation');
const menu = document.querySelectorAll('.menu li');

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});