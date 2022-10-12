'use strict';

const createIndex = (arr, indexKey) => {
  let index = {};
  for (let item of arr) {
    let indexValue = item[indexKey];
    try {
      index[indexValue].push(item);
    } catch (e) {
      index[indexValue] = [item]
    }
  }
  return index;
}

module.exports = createIndex;