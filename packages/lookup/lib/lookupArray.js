'use strict';

const hasKey = require('./utils/hasKey');
const fetchFilter = require('./fetchFilter');

const lookupArray = (opts) => {
  const sourceArray = opts.sourceArray;
  const targetArray = opts.targetArray;
  const sourceField = opts.sourceField;
  const targetField = opts.targetField;
  const fetchFields = opts.fetchFields;
  const resultFieldName = opts.resultFieldName;
  let lookupArray = [];
  for (let sourceObj of sourceArray) {
    if (hasKey(sourceObj, sourceField)) {
      let sourceValueStrOrNumber = (typeof sourceObj[sourceField] == 'string') || (typeof sourceObj[sourceField] == 'number');
      let sourceValue = sourceValueStrOrNumber ? [sourceObj[sourceField]] : sourceObj[sourceField];
      sourceObj[resultFieldName] = {};
      for (let targetObj of targetArray) {
        if (hasKey(targetObj, targetField)) {
          let targetValue = targetObj[targetField];
          // validates if the sourceValue matches with targetValue
          for (let sourceKey of sourceValue) {
            if (sourceKey == targetValue) {
              let fetchedValue = fetchFilter(targetObj, fetchFields);
              if (sourceObj[resultFieldName][sourceKey] == undefined) {
                sourceObj[resultFieldName][sourceKey] = [fetchedValue];
              } else {
                sourceObj[resultFieldName][sourceKey].push(fetchedValue);
              }
            }
          }
        }
      }
      if (sourceValueStrOrNumber) {
        sourceObj[resultFieldName] = sourceObj[resultFieldName][sourceValue[0]];
      }
      lookupArray.push(sourceObj);
    }
  }
  return lookupArray;
}

module.exports = lookupArray;