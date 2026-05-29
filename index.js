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

const darkBtn = document.querySelector(".dark-mode-btn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save mode
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load saved mode
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

/* =========================
   RTL MODE TOGGLE
========================= */

const rtlBtn = document.querySelector(".rtl-btn");

rtlBtn.addEventListener("click", () => {
  if (document.documentElement.getAttribute("dir") === "rtl") {
    document.documentElement.setAttribute("dir", "ltr");
    localStorage.setItem("direction", "ltr");
  } else {
    document.documentElement.setAttribute("dir", "rtl");
    localStorage.setItem("direction", "rtl");
  }
});

// Load saved direction
window.addEventListener("load", () => {
  const savedDirection = localStorage.getItem("direction");

  if (savedDirection === "rtl") {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }
});
