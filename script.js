const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const currentYear = document.getElementById("currentYear");
const root = document.documentElement;

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-actions a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
});

currentYear.textContent = new Date().getFullYear();
