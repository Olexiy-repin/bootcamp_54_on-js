// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';
import { createGalleryCards } from './templates/gallery-cards';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashAPI = new UnsplashAPI();

const onSearchFormElSubmit = event => {
  event.preventDefault();

  unsplashAPI.page = 1;
  unsplashAPI.query = event.target.elements.user_search_query.value.trim();

  unsplashAPI
    .fetchPhotosByQuery()
    .then(data => {
      if (data.total_pages === 0) {
        galleryListEl.innerHTML = '';
        loadMoreBtnEl.classList.add('is-hidden');

        return;
      }

      if (data.total_pages !== 1) {
        loadMoreBtnEl.classList.remove('is-hidden');
      }

      galleryListEl.innerHTML = createGalleryCards(data.results);
    })
    .catch(err => {
      console.log(err);
    });
};

const onLoadMoreBtnElClick = event => {
  unsplashAPI.page += 1;

  unsplashAPI
    .fetchPhotosByQuery()
    .then(data => {
      galleryListEl.insertAdjacentHTML('beforeend', createGalleryCards(data.results));

      if (unsplashAPI.page === data.total_pages) {
        loadMoreBtnEl.classList.add('is-hidden');
      }
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick);
