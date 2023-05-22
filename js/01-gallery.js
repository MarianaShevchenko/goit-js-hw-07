import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const markupArray = galleryItems.map(function (item) {
  const itemMarkup = `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;

  return itemMarkup;
});
galleryRef.innerHTML = markupArray.join("");

function onClick(event) {
  event.preventDefault();
  const { target } = event;
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" alt="${target.alt}">
  `);
  instance.show();
}

galleryRef.addEventListener("click", onClick);
