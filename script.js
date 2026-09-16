const galleryItems = [...document.querySelectorAll(".gallery-item")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxLocation = document.querySelector(".lightbox-location");
const closeButton = document.querySelector(".close-button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) =>
      item.classList.toggle("is-active", item === button),
    );
    galleryItems.forEach((item) => {
      item.hidden = filter !== "all" && item.dataset.category !== filter;
    });
  });
});

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.querySelector("img").alt;
    lightboxTitle.textContent = item.dataset.title;
    lightboxLocation.textContent = item.dataset.location;
    lightbox.showModal();
  });
});

closeButton.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
