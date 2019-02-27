import { add, addCurried, curry, curry2 } from '../lib/es8-functional'

console.log(addCurried(4)(4))

let autoCurriedAdd = curry(add)
console.log(autoCurriedAdd(2)(2))

// const tableOf2 = y => 2 * y
// const tableOf3 = y => 3 * y

// console.log(tableOf2(4))
// console.log(tableOf3(4))

const genericTable = (x, y) => x * y
genericTable(2, 2)
genericTable(2, 3)
genericTable(2, 4)

const tableOf2 = curry(genericTable)(2)
const tableOf3 = curry(genericTable)(3)
const tableOf4 = curry(genericTable)(4)

console.log('Tables via currying')
console.log('2 * 2 =', tableOf2(2))
console.log('2 * 3 =', tableOf2(3))
console.log('2 * 4 =', tableOf2(4))
console.log('3 * 2 =', tableOf3(2))
console.log('3 * 3 =', tableOf3(3))
console.log('3 * 4 =', tableOf3(4))
console.log('4 * 2 =', tableOf4(2))
console.log('4 * 3 =', tableOf4(3))
console.log('4 * 4 =', tableOf4(4))

const loggerHelper = (mode, initialMessage, errorMessage, lineNo) => {
  if (mode === 'DEBUG') {
    console.debug(initialMessage, errorMessage + 'at line: ' + lineNo)
  } else if (mode === 'ERROR') {
    console.error(initialMessage, errorMessage + 'at line: ' + lineNo)
  } else if (mode === 'WARN') {
    console.warn(initialMessage, errorMessage + 'at line: ' + lineNo)
  } else throw 'Wrong mode'
}
loggerHelper('ERROR', 'Error At Stats.js', 'Invalid argument passed', 23)
loggerHelper('ERROR', 'Error At Stats.js', 'undefined argument', 223)
loggerHelper('ERROR', 'Error At Stats.js', 'curry function is not defined', 3)
loggerHelper('ERROR', 'Error At Stats.js', 'slice is not defined', 31)

const multiply = (x, y, z) => x * y * z

console.log(curry2(multiply)(1, 2, 3))
console.log(curry2(multiply)(1, 2, 0))

console.log(curry2(multiply)(3)(2)(1))
// or this which is less readable
let curriedMul3 = curry2(multiply)(3)
let curriedMul2 = curriedMul3(2)
let curriedMul1 = curriedMul2(1)
console.log(curriedMul1)
