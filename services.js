const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

const homeLink = document.querySelector(".home-menu > a");
const dropdown = document.querySelector(".dropdown");

/* MOBILE NAVBAR */

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* MOBILE DROPDOWN */

homeLink.addEventListener("click", (e) => {
  if (window.innerWidth <= 1024) {
    e.preventDefault();

    dropdown.classList.toggle("show-dropdown");
  }
});

/* DARK MODE */

const darkBtn = document.querySelector(".dark-mode-btn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

/* LOAD THEME */

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

/* RTL MODE */

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

/* LOAD RTL */

window.addEventListener("load", () => {
  const savedDirection = localStorage.getItem("direction");

  if (savedDirection === "rtl") {
    document.documentElement.setAttribute("dir", "rtl");
  }
});
