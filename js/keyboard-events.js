/*
 * Події клавіатури. keypress, keydown, keyup
 */

document.addEventListener('keydown', event => {
  event.preventDefault();

  console.log(`event.code: ${event.code} / event.key: ${event.key}`);

  if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
    console.log('«Ctrl + s» or «Command + s» combo');
  }
});
