import {validationMessage} from './selectors.js';

const clear = () => {
  validationMessage.innerHTML = '';
  validationMessage.classList.remove('active');
};

export default { clear };