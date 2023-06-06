/*
 * Method (GET).
 */

fetch('http://localhost:3000/users', { method: 'GET' })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
