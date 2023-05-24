const sectionElements = document.querySelectorAll('.section');
const animatedSection = document.querySelector('.js-animated-section');

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintSections = sections => {
  sections.forEach(section => {
    section.style.backgroundColor = randomColor();
  });
};

paintSections(sectionElements);

const onDocumentScroll = event => {
  console.log(window.pageYOffset);

  if (window.pageYOffset >= 600) {
    animatedSection.classList.add('active');
    document.removeEventListener('scroll', onDocumentScrollThrottled);
  }
};

const onDocumentScrollThrottled = _.throttle(onDocumentScroll, 300);

document.addEventListener('scroll', onDocumentScrollThrottled);
