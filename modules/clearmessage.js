import * as selector from './selectors.js';

export const clear = () => {
  selector.validationMessage.innerHTML = '';
  selector.validationMessage.classList.remove('active');
}