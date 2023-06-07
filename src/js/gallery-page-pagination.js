// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';
import { createGalleryCards } from './templates/gallery-cards';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const paginationContainerEl = document.querySelector('.js-tui-pagination');

const unsplashAPI = new UnsplashAPI();

const paintRandomPhotos = async () => {
  try {
    const { data } = await unsplashAPI.fetchRandomPhotos();

    galleryListEl.innerHTML = createGalleryCards(data);
  } catch (err) {
    console.log(err);
  }
};

paintRandomPhotos();

const createPagination = total => {
  const paginationOptions = {
    totalItems: total,
    itemsPerPage: 20,
    visiblePages: 10,
    page: 1,
  };

  const pagination = new Pagination(paginationContainerEl, paginationOptions);

  paginationContainerEl.classList.remove('is-hidden');

  pagination.on('beforeMove', async event => {
    unsplashAPI.page = event.page;

    try {
      const { data } = await unsplashAPI.fetchPhotosByQuery();

      galleryListEl.innerHTML = createGalleryCards(data.results);
    } catch (err) {
      console.log(err);
    }
  });
};

const onSearchFormElSubmit = async event => {
  event.preventDefault();

  unsplashAPI.page = 1;
  unsplashAPI.query = event.target.elements.user_search_query.value.trim();

  try {
    const { data } = await unsplashAPI.fetchPhotosByQuery();

    if (data.total_pages === 0) {
      galleryListEl.innerHTML = '';
      paginationContainerEl.classList.add('is-hidden');

      return;
    }

    if (data.total_pages !== 1) {
      createPagination(data.total);
    }

    galleryListEl.innerHTML = createGalleryCards(data.results);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
