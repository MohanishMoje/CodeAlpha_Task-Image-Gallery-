let currentImageIndex = 0;
let activeImages = [];

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');


function openLightbox(img) {
  const currentCategory = img.closest('.image').classList[1]; 
  activeImages = Array.from(document.querySelectorAll(`.image.${currentCategory} img`));
  currentImageIndex = activeImages.indexOf(img);

  lightbox.style.display = "block";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}


function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = activeImages.length - 1;
  if (currentImageIndex >= activeImages.length) currentImageIndex = 0;
  lightboxImg.src = activeImages[currentImageIndex].src;
}
function filterGallery(category) {
  const allImages = document.querySelectorAll('.gallery .image');
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}


lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});


const toggleInput = document.getElementById("darkModeToggle");
toggleInput.addEventListener("change", () => {
  const isDark = toggleInput.checked;
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const isDark = savedTheme === "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  toggleInput.checked = isDark;
});
