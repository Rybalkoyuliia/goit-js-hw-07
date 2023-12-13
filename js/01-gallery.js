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

const instance = basicLightbox.create(
  `<img width = 1400 height 900 src = src="">`,
  {
    onShow: () => {
      console.log("Open");
      document.addEventListener("keydown", keyBordPress);
    },

    onClose: () => {
      document.removeEventListener("keydown", keyBordPress);
    },
  }
);
function onImageItemClick(event) {
  event.preventDefault();
  const currentItem = event.target;
  if (currentItem.nodeName !== "IMG") return;
  instance.element().querySelector("IMG").src = event.target.dataset.source;
  instance.show();
}

galleryList.addEventListener("click", onImageItemClick);

function keyBordPress(evt) {
  if (evt.key === "Escape") {
    instance.close();
  }
}
