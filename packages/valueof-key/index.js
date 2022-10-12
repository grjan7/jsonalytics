'use strict';

const valueOfKey = (obj, keyString) => {

  let resolvedValue = obj;
  let keysArr = keyString.split(".");

  for (let i in keysArr) {
    let key = keysArr[i];
    resolvedValue = resolvedValue[key];
  }

  return resolvedValue;
}

module.exports = valueOfKey;