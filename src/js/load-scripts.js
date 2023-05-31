// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */
//? Створіть функцію loadScript(url), яка буде створювати та додавати скрипт на сторінку
// const loadScript = (url, onSuccess, onError) => {
//   const scriptEl = document.createElement('script');

//   scriptEl.src = url;

//   document.body.append(scriptEl);

//   scriptEl.addEventListener('load', event => {
//     onSuccess(url);
//   });

//   scriptEl.addEventListener('error', event => {
//     onError(url);
//   });
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   url => {
//     console.log(`Скрипт ${url} завантажився успішно!`);

//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       url => {
//         console.log(`Скрипт ${url} завантажився успішно!`);

//         loadScript(
//           'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//           url => {
//             console.log(`Скрипт ${url} завантажився успішно!`);
//           },
//           url => {
//             console.log(`Скрипт ${url} не завантажився!`);
//           }
//         );
//       },
//       url => {
//         console.log(`Скрипт ${url} не завантажився!`);
//       }
//     );
//   },
//   url => {
//     console.log(`Скрипт ${url} не завантажився!`);
//   }
// );

//? Передайте кобэк, який буде викликатися по завершеню завантаженя скрипта

//? Опрацюйте помилки

//? Завантаженя декількох скриптів

//? Пекельна піраміда колбеків

//? Рішення через проміси
const loadScript = url => {
  const promise = new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');

    scriptEl.src = url;

    document.body.append(scriptEl);

    scriptEl.addEventListener('load', event => {
      resolve(url);
    });

    scriptEl.addEventListener('error', event => {
      reject(url);
    });
  });

  return promise;
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(scriptUrl => {
    console.log(`Скрипт ${scriptUrl} завантажився успішно!`);

    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
  })
  .then(scriptUrl => {
    console.log(`Скрипт ${scriptUrl} завантажився успішно!`);

    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js');
  })
  .then(scriptUrl => {
    console.log(`Скрипт ${scriptUrl} завантажився успішно!`);
  })
  .catch(scriptUrl => {
    console.log(`Скрипт ${scriptUrl} не завантажився!`);
  });
