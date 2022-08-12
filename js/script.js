const menuIconWrapper = document.querySelector(".menu-icon-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");

menuIconWrapper.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon-active");
};
