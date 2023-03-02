'use strict';

const ERRORS = {
  UNDEF_SRC_ARR: "opts.sourceArray cannot be undefined.",
  UNDEF_TARGET_ARR: "opts.targetArray cannot be undefined.",
  UNDEF_SRC_FIELD: "opts.sourceField cannot be undefined.",
  UNDEF_TARGET_FIELD: "opts.targetField cannot be undefined.",
  UNDEF_RESULT_FIELD: "opts.resultFieldName cannot be undefined.",

  NOT_OBJ_ARR_SRC: "opts.sourceArray must be an object array.",
  NOT_OBJ_ARR_TARGET: "opts.sourceArray must be an object array.",
  NOT_STR_SRC_FIELD: "opts.sourceField must be a string and any of the keys of the opts.sourceArray objects.",
  NOT_STR_TARGET_FIELD: "opts.targetField must be a string and any of the keys of the opts.targetArray objects.",
  NOT_STR_RESULT_FIELD: "opts.resultFieldName must be a string.",
  NOT_STR_OR_ARR_FETCH_FIELD: "opts.fetchFields must be a string or string array that represents the keys of targetArray objects."
};

module.exports = ERRORS;