'use strict';

const validateOptions = require('./lib/validateOptions');
const lookupArray = require('./lib/lookupArray');

const lookUp = (opts) => {
  try {
    if (validateOptions(opts)) {
      return lookupArray(opts)
    }
  } catch (e) {
    throw e;
  }
}

module.exports = lookUp;
