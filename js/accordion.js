const accordionBtnElements = document.querySelectorAll('.js-accordion-btn');

const onAccordionBtnClick = event => {
  const currentAccordionBtn = event.target;
  const panel = currentAccordionBtn.nextElementSibling;

  console.log(currentAccordionBtn);
  console.log(panel);

  panel.classList.toggle('active');
};

accordionBtnElements.forEach(accordionBtn => {
  accordionBtn.addEventListener('click', onAccordionBtnClick);
});
