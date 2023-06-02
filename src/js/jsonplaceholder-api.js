export class JsonPlaceholderAPI {
  constructor() {
    // this = {}
    this.page = 1;
    // return this;
  }

  fetchPosts() {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${this.page}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      }
    );
  }
}
