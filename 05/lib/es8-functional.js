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

const arrayUtils = {
  map,
  filter,
  concatAll,
  reduce
}

export { forEach, arrayUtils, concatAll, reduce }
