/*
 * Помилки фази інтерпретації(compile time) обробити неможливо. Тільки помилки фази виконання(runtime).
 * try/catch працює тільки з синхроним кодом.
 */

console.log('First');

setTimeout(() => {
  try {
    const user = {};

    console.log('Second');

    user = 'Hello!';
  } catch (err) {
    console.log(err);
  }
}, 0);

console.log('End');
