// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createMarkupGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);



function createMarkupGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');

};
console.log();

const lightbox = new SimpleLightbox('.gallery a', 
{ nav:true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250, });
