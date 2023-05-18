const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

// const titleEl = document.querySelector('.js-title');

// console.log(titleEl);

// titleEl.textContent = '<span>Main</span> Title';
// titleEl.innerHTML = '';

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

const galleryListEl = document.querySelector('.js-gallery');

// Функція для створення карточки makeGalleryCard(cardInfo)
const makeGalleryCard = ({ width, height, url, alt } = {}) => {
  return `
  <li class="gallery-item">
    <a href="#">
      <img src="${url}" alt="${alt}" width="${width}" height="${height}">
    </a>
  </li>
  `;
};

// Створення масиву рядків із елементами
const galleryCardsArr = pictures.map((imageInfo, idx, arr) => {
  return makeGalleryCard(imageInfo);
});

console.log(galleryCardsArr);

console.log(galleryCardsArr.join(''));

// Вставка елементів на сторінку
// galleryListEl.innerHTML = galleryCardsArr.join('');
galleryListEl.insertAdjacentHTML('afterbegin', galleryCardsArr.join(''));
