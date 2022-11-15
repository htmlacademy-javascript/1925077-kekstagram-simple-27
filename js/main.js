import './show-mini-photos.js';
import './scale-control.js';
import './effect.js';
import './network.js';

import { setUserFormSubmit } from './form-validate.js';
import { closeModal} from './show-modal-photo.js';

setUserFormSubmit(closeModal);
