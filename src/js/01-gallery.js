// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const photos = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"></a></li>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', photos);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionType: 'attr',
});

console.log(galleryItems);
