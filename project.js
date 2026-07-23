const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const currentYear = document.getElementById("currentYear");
const photoUpload = document.getElementById("photoUpload");
const projectGallery = document.getElementById("projectGallery");
const uploadNote = document.getElementById("uploadNote");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
});

photoUpload.addEventListener("change", () => {
  const photos = [...photoUpload.files];

  photos.forEach((photo) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");

    image.src = URL.createObjectURL(photo);
    image.alt = photo.name.replace(/\.[^/.]+$/, "").replaceAll("-", " ");
    image.addEventListener("load", () => URL.revokeObjectURL(image.src), { once: true });
    caption.textContent = photo.name;
    figure.append(image, caption);
    projectGallery.append(figure);
  });

  if (photos.length) {
    uploadNote.textContent = `${photos.length} photo${photos.length === 1 ? "" : "s"} added for this preview.`;
  }

  photoUpload.value = "";
});

currentYear.textContent = new Date().getFullYear();
