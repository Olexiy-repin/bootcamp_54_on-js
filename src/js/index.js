console.log('First');

const promise = new Promise((resolve, reject) => {
  console.log('From class Promise');

  resolve('Done!');
});

setTimeout(() => {
  console.log('From setTimeout');
}, 0);

promise.then(result => {
  console.log(result);
});

console.log('End');
