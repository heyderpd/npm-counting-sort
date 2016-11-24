
/*!
 * counting-sort
 * Copyright (c) 2016 heyderpd <heyderpd@gmail.com>
 * MIT Licensed
 */

const countingSort = () => {
  const limit = array.length
  counting = []
  for (let i = 0; i < limit; i++) {
    iterations += 1
    let value = array[i]
    counting[value] !== undefined
      ? counting[value] += 1
      : counting[value] = 1
  }
}

const revertCount = () => {
  const limit = counting.length
  array = []
  for (let i=0; i<limit; i++) {
    iterations += 1
    counting[i] !== undefined
      ? pushCount(array, counting[i], i)
      : undefined
  }
}

const pushCount = (array, rep, value) => {
  for (let i=0; i<rep; i++) {
    iterations += 1
    array.push(value)
  }
  return array
}

const main = (inputArray, debug = false) => {
  if (inputArray.length === undefined || inputArray.length <= 1) {
    return inputArray
  }
  array = inputArray
  let crono
  if (debug) {
    crono = +new Date()
    iterations = 0
  }
  countingSort()
  revertCount()
  if (debug) {
    crono = (+new Date() -crono) /1000
    console.log(`ALL iteration's: ${iterations} in ${crono} ms.`)
  }
  return array
}

let array, counting, iterations

module.exports = main
