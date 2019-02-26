const forEach = (arr, fn) => {
  for (const value of arr) {
    fn(value)
  }
}

const map = (array, fn) => {
  let results = []
  for (const value of array) {
    results.push(fn(value))
  }
  return results
}

const filter = (array, fn) => {
  let results = []
  for (const value of array) {
    fn(value) ? results.push(value) : undefined
  }
  return results
}

const concatAll = (array, fn) => {
  let results = []
  for (const value of array) {
    results.push.apply(results, value)
  }
  return results
}

const reduce = (array, fn, initialValue) => {
  let accumulator
  if (initialValue !== undefined) {
    accumulator = initialValue
  } else {
    accumulator = array[0]
  }
  if (initialValue === undefined) {
    for (let i = 1; i < array.length; i++) {
      accumulator = fn(accumulator, array[i])
    }
  } else {
    for (const value of array) {
      accumulator = fn(accumulator, value)
    }
  }
  return [accumulator]
}

const zip = (leftArr, rightArr, fn) => {
  let index
  let results = []
  for (
    let index = 0;
    index < Math.min(leftArr.length, rightArr.length);
    index++
  ) {
    results.push(fn(leftArr[index], rightArr[index]))
  }
  return results
}

const arrayUtils = {
  forEach,
  map,
  filter,
  concatAll,
  reduce,
  zip
}

export { forEach, arrayUtils, concatAll, reduce, zip }
