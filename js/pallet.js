const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.elementBgColor = color;
  });
};

paintElements();

const onPalletElClick = event => {
  if (event.target.nodeName === 'SPAN') {
    return;
  }

  const palletEl = event.target;
  const palletElBgColor = palletEl.dataset.elementBgColor;
  const palletOutputColorEl = palletEl.querySelector('.js-pallet__item-color');

  palletOutputColorEl.textContent = palletElBgColor;
};

palletEl.addEventListener('click', onPalletElClick);
