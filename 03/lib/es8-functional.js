const forEach = (array, fn) => {
  let i
  for (i = 0; i < array.length; i++) fn(array[i])
}

const forEachObject = (obj, fn) => {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      // calls the fin with key and value as its argument
      fn(property, obj[property])
    }
  }
}

const unless = (predicate, fn) => {
  if (!predicate) {
    fn()
  }
}

const times = (times, fn) => {
  for (let i = 0; i < times; i++) {
    fn(i)
  }
}

const every = (arr, fn) => {
  let result = true
  for (const value of arr) {
    result = result && fn(value)
  }
  return result
}

const some = (arr, fn) => {
  let result = false
  for (const value of arr) {
    result = result || fn(value)
  }
  return result
}

const sortBy = property => {
  return (a, b) => {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result
  }
}

const tap = value => fn => {
  if (typeof fn === 'function' && fn(value)) {
    console.log(value)
  }
}

const unary = fn => (fn.length === 1 ? fn : arg => fn(arg))

const once = fn => {
  let done = false
  return function () {
    return done ? undefined : ((done = true), fn())
  }
}

const memoized = fn => {
  const lookupTable = {}

  return function (arg) {
    return lookupTable[arg] || (lookupTable[arg] = fn(arg))
  }
}

export {
  forEach,
  forEachObject,
  unless,
  times,
  every,
  some,
  sortBy,
  tap,
  unary,
  once,
  memoized
}
