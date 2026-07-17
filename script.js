// Mobile menu

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});


// Close menu after clicking a link

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});


// Current year in footer

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// Back-to-top button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});