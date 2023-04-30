// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const photos = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"></a></li>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', photos);

gallery.style.listStyleType = 'none';
gallery.style.padding = '0';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
