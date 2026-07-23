const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const currentYear = document.getElementById("currentYear");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
});

currentYear.textContent = new Date().getFullYear();
