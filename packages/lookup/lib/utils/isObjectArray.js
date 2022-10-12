'use strict';

const isObjectArray = (arg) => Array.isArray(arg) && arg.every((it) => typeof it == 'object' && it != null && it != undefined && !Array.isArray(it));

module.exports = isObjectArray;