const sectionsEl = document.querySelectorAll('.section');
const targetSecEl = document.querySelector('.js-target-section');

const randomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

sectionsEl.forEach(el => {
  el.style.backgroundColor = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )}, ${randomInteger(0, 255)})`;
});

const observerOptions = {
  root: null,
  rootMargin: '200px 0px 400px 0px',
  threshold: 1.0,
};

const observerCallback = (entries, observer) => {
  console.log(entries);
  if (entries[0].isIntersecting) {
    console.log('Hello!');
  }
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(targetSecEl);
