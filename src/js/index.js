import throttle from 'lodash.throttle';
import * as math from './math.js';

console.log(math);

const onDocumentScroll = event => {
  console.log('Hello!');
};

document.addEventListener('scroll', throttle(onDocumentScroll, 300));
