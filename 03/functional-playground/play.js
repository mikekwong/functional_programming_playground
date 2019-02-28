import {
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
} from '../lib/es8-functional'

let object = { a: 1, b: 2 }
forEachObject(object, (k, v) => console.log(k + ':' + v))

forEach([1, 2, 3, 4, 5, 6, 7], number => {
  unless(number % 2, () => {
    console.log(number, ' is even')
  })
})

times(100, function (n) {
  unless(n % 2, function () {
    console.log(n, 'is even')
  })
})

console.log(every([NaN, NaN, NaN], isNaN))
console.log(every([NaN, NaN, 4], isNaN))
console.log(some([NaN, NaN, 4], isNaN))
console.log(some([3, 4, 4], isNaN))

var people = [
  { firstname: 'aaFirstName', lastname: 'cclastName' },
  { firstname: 'ccFirstName', lastname: 'aalastName' },
  { firstname: 'bbFirstName', lastname: 'bblastName' }
]

console.log(people.sort(sortBy('firstname')))
console.log(people.sort(sortBy('lastname')))

tap('fun')(it => console.log('value is ', it))

console.log(['1', '2', '3'].map(unary(parseInt)))

var doPayment = once(() => {
  console.log('payment is done')
})
doPayment()
// oops bad, we are doing second time!
doPayment()

let fastFactorial = memoized(n => {
  if (n === 0) {
    return 1
  }
  return n * fastFactorial(n - 1)
})

console.log(fastFactorial(5))
console.log(fastFactorial(3))
console.log(fastFactorial(3))
