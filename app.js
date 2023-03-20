'use strict';

const score = [5, 10, 0, 15];

/* for (const [i, el] of score.entries()) {
  console.log(`Раунд ${i + 1}: ${el}`);
}
 */

const iterator = (scroreEl, i) => {
  console.log(`Раунд ${i + 1}: ${scroreEl}`);
};

score.forEach(iterator);
