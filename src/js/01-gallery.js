// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");
const markupGalleryItem = galleryItems.map(({description, original, preview}) => `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");
gallery.innerHTML = markupGalleryItem;
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
let lightbox = new SimpleLightbox('.gallery a', {
	captionsData: "alt",
	captionDelay: 250,
});