import axios from 'axios';

console.dir(axios);

axios
  .get('http://localhost:3000/posts')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
