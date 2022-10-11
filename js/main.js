import {
  TEST_STRING,
  DEFAULT_MAX_LENGTH,
  AMOUNT_OF_OBJECTS,
  DESCRIPTIONS,
  createArrayDataOfPhotos
} from './data.js';
import {checkLengthOfComment} from './util.js';


checkLengthOfComment(TEST_STRING, DEFAULT_MAX_LENGTH);


createArrayDataOfPhotos(AMOUNT_OF_OBJECTS, DESCRIPTIONS);
