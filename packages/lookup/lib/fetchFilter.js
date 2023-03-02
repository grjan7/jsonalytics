'use strict';

const isStringArray = require('./utils/isStringArray');

const fetchFilter = (targetObj, fetchFields) => {
  let fetchedValue;
  if (fetchFields) {
    if (typeof fetchFields == 'string') {
      fetchedValue = targetObj[fetchFields];
    }
    if (isStringArray(fetchFields)) {
      let fetchedObj = {};
      for (let fetchKey of fetchFields) {
        fetchedObj[fetchKey] = targetObj[fetchKey];
      }
      fetchedValue = fetchedObj;
    }
  } else {
    fetchedValue = targetObj;
  }
  return fetchedValue;
}

module.exports = fetchFilter;