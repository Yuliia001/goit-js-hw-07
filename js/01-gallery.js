// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення
//  у модальному вікні.Подивися демо відео роботи галереї.

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2.Реалізація делегування на ul.gallery і отримання url великого зображення.
// 3.Відкриття модального вікна по кліку на елементі галереї.
//  Для цього ознайомся з документацією і прикладами.
// 4.Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
//  Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >,
// і вказуватися в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

//     Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням 
// користувач буде перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури

// Додай закриття модального вікна після натискання клавіші Escape.Зроби так, щоб прослуховування 
// клавіатури було тільки доти, доки відкрите модальне вікно.Бібліотека basicLightbox
//  містить метод для програмного закриття модального вікна.


import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
galleryList.insertAdjacentHTML('beforeend', markup);

galleryList.addEventListener('click', handlerOpenModal);

let instance;
function handlerOpenModal(evt) {
    evt.preventDefault();
    // const imgItem = evt.target.closest('.gallery__item');
    if (evt.target.classList.contains('gallery__item')){
        return;
        
    }
    const {source}  = evt.target.dataset;
    instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`, {
         onShow: () => {
            document.addEventListener('keydown', closeEscape)
    },
        onClose: () => {
            document.removeEventListener('keydown', closeEscape)
    }
}
);

    instance.show();
    
}

function closeEscape(evt) {
    if (evt.code === "Escape") {
        instance.close();
        
    }
}


