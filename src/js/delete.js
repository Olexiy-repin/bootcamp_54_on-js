/*
 * Method(DELETE)
 */

const BASE_URL = 'http://localhost:3000';

const deleteUserById = userId => {
  fetch(`${BASE_URL}/users/${userId}`, { method: 'DELETE' });
};

deleteUserById(12);
