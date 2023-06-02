export class UnsplashAPI {
  static BASE_URL = 'https://api.unsplash.com';
  static API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.page = null;
    this.query = null;
  }

  fetchPhotosByQuery() {
    const searchParams = new URLSearchParams({
      query: this.query,
      page: this.page,
      per_page: 20,
      orientation: 'portrait',
      client_id: UnsplashAPI.API_KEY,
    });

    return fetch(`${UnsplashAPI.BASE_URL}/search/photos?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
