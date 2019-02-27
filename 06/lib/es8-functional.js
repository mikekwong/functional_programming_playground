const add = (x, y) => x + y
// The process of converting a function from two arguments to a
// function that takes one argument (unary function) is called currying
const addCurried = x => y => x + y

const curry = binaryFn => {
  return function (firstArg) {
    return function (secondArg) {
      return binaryFn(firstArg, secondArg)
    }
  }
}

// new curry function to handle function as an arg and also handle variadic args that turn into unary functions properly for proper currying
const curry2 = fn => {
  if (typeof fn !== 'function') {
    throw Error('No function provided')
  }
  return function curriedFn (...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)))
      }
    }
    return fn.apply(null, args)
  }
}

export { add, addCurried, curry, curry2 }
