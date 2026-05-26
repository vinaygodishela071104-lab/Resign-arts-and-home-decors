const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

const homeMenu = document.querySelector(".home-menu");
const dropdown = document.querySelector(".dropdown");

/* MOBILE NAVBAR */

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

/* HOME DROPDOWN */

homeMenu.onclick = (e) => {
  if (window.innerWidth <= 1024) {
    e.preventDefault();

    dropdown.classList.toggle("show-dropdown");
  }
};
