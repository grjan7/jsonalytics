'use strict';

const valueOfKey = require('@jstats/valueof-key');

const valuesOfKey = (objArr, keyString) => {
  return objArr.map((obj) => valueOfKey(obj, keyString));
}

module.exports = valuesOfKey;