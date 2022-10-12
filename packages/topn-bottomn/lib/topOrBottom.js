'use strict';

const createIndex = require('./createIndex');
const skip = require('./skip');
const limit = require('./limit');

const getTopOrBottom = (arr, sortKey, opts) => {

  const indexObj = createIndex(arr, sortKey);
  const indexedArr = Object.values(indexObj);

  if (opts) {
    if (opts.sortOrder) {
      if (opts.sortOrder == 1) {
        indexedArr = indexedArr.reverse();
      }
    }
    if (opts.skip) {
      indexedArr = skip(indexedArr, opts.skip);
    }
    if (opts.limit) {
      indexedArr = limit(indexedArr, opts.limit);
    }
  }

  return indexedArr;
}


module.exports = getTopOrBottom;