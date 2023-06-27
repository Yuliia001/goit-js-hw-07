import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}" 
        alt="${description}" 
      />
   </a>
</li>`).join('');
galleryList.insertAdjacentHTML('beforeend', markup);

galleryList.addEventListener('click', handlerOpenModal);


function handlerOpenModal(evt) {
    evt.preventDefault();
    // console.log('target', evt.target)
    if (evt.target.classList.contains('gallery__item')){
        return;
        
    }
    
   
    const lightbox = new SimpleLightbox('.gallery a', { 
        captionType: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
        captionsData: 'alt',

      });
    lightbox.open();
    
    
}



