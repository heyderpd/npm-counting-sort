"use strict";

/*!
 * counting-sort
 * Copyright (c) 2016 heyderpd <heyderpd@gmail.com>
 * MIT Licensed
 */

var countingSort = function countingSort() {
  var limit = array.length;
  counting = [];
  for (var i = 0; i < limit; i++) {
    iterations += 1;
    var value = array[i];
    counting[value] !== undefined ? counting[value] += 1 : counting[value] = 1;
  }
};

var revertCount = function revertCount() {
  var limit = counting.length;
  array = [];
  for (var i = 0; i < limit; i++) {
    iterations += 1;
    counting[i] !== undefined ? pushCount(array, counting[i], i) : undefined;
  }
};

var pushCount = function pushCount(array, rep, value) {
  for (var i = 0; i < rep; i++) {
    iterations += 1;
    array.push(value);
  }
  return array;
};

var main = function main(inputArray) {
  var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (inputArray.length === undefined || inputArray.length <= 1) {
    return inputArray;
  }
  array = inputArray;
  var crono = void 0;
  if (debug) {
    crono = +new Date();
    iterations = 0;
  }
  countingSort();
  revertCount();
  if (debug) {
    crono = (+new Date() - crono) / 1000;
    console.log("ALL iteration's: " + iterations + " in " + crono + " ms.");
  }
  return array;
};

var array = void 0,
    counting = void 0,
    iterations = void 0;

module.exports = main;
