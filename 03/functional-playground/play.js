import { forEach, forEachObject, unless, times } from '../lib/es8-functional'

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
