/*
<li class="gallery__item">
    <img src="{{this.urls.regular}}" alt="{{this.alt_description}}" class="gallery-img">
</li>
*/

export const createGalleryCards = imagesInfo => {
  const imagesArr = imagesInfo.map(imgInfo => {
    return `
        <li class="gallery__item">
            <img class="gallery-img" src="${imgInfo.urls.regular}" alt="${imgInfo.alt_description}" >
        </li>
        `;
  });

  return imagesArr.join('');
};
