'use strict';

const isValidObj = (arg) => (typeof arg == 'object') &&
  (!Array.isArray(arg)) &&
  (arg != null) &&
  (arg != undefined);

const isObjectArray = (arg) => Array.isArray(arg) &&
  (arg.length > 0) &&
  arg.every(it => isValidObj(it));

module.exports = isObjectArray