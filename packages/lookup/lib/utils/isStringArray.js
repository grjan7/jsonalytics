'use strict';

const isStringArray = (arg) => Array.isArray(arg) &&
  arg.every(it => typeof it == 'string');

module.exports = isStringArray;