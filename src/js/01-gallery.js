// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const ulGalleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryList(galleryItems);
ulGalleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryList(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item"  onclick="event.preventDefault()" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`;
    })
    .join('');
}
console.log(createGalleryList(galleryItems));
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {
  // Do something…
});

gallery.on('error.simplelightbox', function (e) {});
console.log(galleryItems);
