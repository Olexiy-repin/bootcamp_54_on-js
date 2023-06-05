// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';
import { createGalleryCards } from './templates/gallery-cards';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const observerdEl = document.querySelector('.js-observerd-element');

const unsplashAPI = new UnsplashAPI();

const galleryObserver = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      unsplashAPI.page += 1;

      unsplashAPI
        .fetchPhotosByQuery()
        .then(data => {
          galleryListEl.insertAdjacentHTML('beforeend', createGalleryCards(data.results));

          if (unsplashAPI.page === data.total_pages) {
            observer.unobserve(observerdEl);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  {
    root: null,
    rootMargin: '0px 0px 400px 0px',
    threshold: 1.0,
  }
);

const onSearchFormElSubmit = event => {
  event.preventDefault();

  unsplashAPI.page = 1;
  unsplashAPI.query = event.target.elements.user_search_query.value.trim();

  unsplashAPI
    .fetchPhotosByQuery()
    .then(data => {
      if (data.total_pages === 0) {
        galleryListEl.innerHTML = '';

        return;
      }

      if (data.total_pages !== 1) {
        setTimeout(() => {
          galleryObserver.observe(observerdEl);
        }, 1000);
      }

      galleryListEl.innerHTML = createGalleryCards(data.results);
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
