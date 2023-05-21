import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const markupArray = galleryItems.map(function (item) {
  const itemMarkup = `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`;

  return itemMarkup;
});

galleryRef.innerHTML = markupArray.join("");

const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
