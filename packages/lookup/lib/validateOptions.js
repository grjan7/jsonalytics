'use strict';

const isObjectArray = require('./utils/isObjectArray');
const isStringArray = require('./utils/isStringArray');
const ERRORS = require('./errors');

const validateOptions = (opts) => {
  // validate opts.sourceArray
  if (!opts.sourceArray) {
    throw new Error(ERRORS.UNDEF_SRC_ARR);
  } else {
    if (!isObjectArray(opts.sourceArray)) {
      throw new Error(ERRORS.NOT_OBJ_ARR_SRC);
    }
  }
  // validate opts.targetArray
  if (!opts.targetArray) {
    throw new Error(ERRORS.UNDEF_TARGET_ARR);
  } else {
    if (!isObjectArray(opts.targetArray)) {
      throw new Error(ERRORS.NOT_OBJ_ARR_TARGET);
    }
  }
  // validate opts.sourceField
  if (!opts.sourceField) {
    throw new Error(ERRORS.UNDEF_SRC_FIELD);
  } else {
    if (typeof opts.sourceField != 'string') {
      throw new Error(ERRORS.NOT_STR_SRC_FIELD);
    }
  }
  // validate opts.targetField
  if (!opts.targetField) {
    throw new Error(ERRORS.UNDEF_TARGET_FIELD);
  } else {
    if (typeof opts.targetField != 'string') {
      throw new Error(ERRORS.NOT_STR_TARGET_FIELD);
    }
  }
  // validate opts.resultFieldName
  if (!opts.resultFieldName) {
    throw new Error(ERRORS.UNDEF_RESULT_FIELD);
  } else {
    if (typeof opts.resultFieldName != 'string') {
      throw new Error(ERRORS.NOT_STR_RESULT_FIELD);
    }
  }
  // validate opts.resultFieldName
  if (opts.fetchFields) {
    if (typeof opts.fetchFields == 'string' || isStringArray(opts.fetchFields)) { }
    else {
      throw new Error(ERRORS.NOT_STR_OR_ARR_FETCH_FIELD)
    }
  }
  // finally if all satifies conditions
  return true;
}

module.exports = validateOptions;