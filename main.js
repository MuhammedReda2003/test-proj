let closeMenu = document.querySelector(".nav__close");
let openMenu = document.querySelector(".nav__open");
let navMenu = document.querySelector(".nav__menu");
let itemMenu = document.querySelectorAll(".nav__item");
let header = document.querySelector("header");

openMenu.addEventListener("click", () => {
  navMenu.classList.add("nav-open-btn");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("nav-open-btn");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
});

itemMenu.forEach((ele) => {
  ele.addEventListener("click", () => {
    navMenu.classList.remove("nav-open-btn");
  });
});

ScrollReveal({
  distance: "100px",
  duration: 1500,
  delay: 150,
  reset: true,
}).reveal(".home_content, .skill__cards");
