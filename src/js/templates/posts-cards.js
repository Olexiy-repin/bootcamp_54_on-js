/* 
<li class="posts__item">
    <h2 class="posts__title">{{this.title}}</h2>
    <p class="posts__text">{{this.body}}</p>
    <p class="posts__id">id: {{this.id}}</p>
</li>
*/

export const createPostsCards = postsInfo => {
  const postsArr = postsInfo.map(post => {
    return `
            <li class="posts__item">
                <h2 class="posts__title">${post.title}</h2>
                <p class="posts__text">${post.body}</p>
                <p class="posts__id">id: ${post.id}</p>
            </li>
        `;
  });

  return postsArr.join('');
};
