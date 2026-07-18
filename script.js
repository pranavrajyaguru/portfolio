const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const currentYear = document.getElementById("currentYear");
const root = document.documentElement;
const projectTabs = document.querySelectorAll("[data-project-tab]");
const projectPanels = document.querySelectorAll("[data-project-panel]");
const projectEmpty = document.querySelector("[data-project-empty]");

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

projectTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedProject = tab.dataset.projectTab;

    projectEmpty.hidden = true;

    projectTabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    projectPanels.forEach((panel) => {
      panel.hidden = panel.dataset.projectPanel !== selectedProject;
      panel.classList.toggle("active", panel.dataset.projectPanel === selectedProject);
    });
  });
});

currentYear.textContent = new Date().getFullYear();
