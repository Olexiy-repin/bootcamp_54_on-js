/*
 * Method (POST). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const createUser = userInfo => {
  return fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

createUser({
  name: 'Mittie Alexander',
  username: 'Antonette',
  email: 'hec@suwmer.edu',
  address: {
    street: 'Victor Plains',
    suite: 'Suite 879',
    city: null,
    zipcode: '90566-7771',
    geo: {
      lat: null,
      lng: null,
    },
  },
  phone: '(811) 572-9923',
  website: null,
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
})
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
