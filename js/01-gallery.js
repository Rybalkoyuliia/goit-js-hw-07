import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join("");

galleryList.innerHTML = markup;

galleryList.addEventListener("click", onImageItemClick);

function onImageItemClick(event) {
  event.preventDefault();
  const currentItem = event.target;
  if (currentItem.nodeName !== "IMG") return;
  const img = currentItem.dataset.source;
  const instance = basicLightbox.create(`
  <img src="${img}" alt="${currentItem.alt}">
`);

  instance.show();

  document.addEventListener("keydown", handleModal);

  function handleModal(closeEvent) {
    if (closeEvent.key !== "Escape") {
      return;
    }
    instance.close();
    document.removeEventListener("keydown", handleModal);
  }
}
