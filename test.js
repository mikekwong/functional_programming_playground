var people = [
  { firstname: 'aaFirstName', lastname: 'cclastName' },
  { firstname: 'ccFirstName', lastname: 'aalastName' },
  { firstname: 'bbFirstName', lastname: 'bblastName' }
]

const first = people.sort((a, b) => {
  return a.firstname < b.firstname ? -1 : a.firstname > b.firstname ? 1 : 0
})
console.log(first)

const last = people.sort((a, b) => {
  return a.lastname < b.lastname ? -1 : a.lastname > b.lastname ? 1 : 0
})
console.log(last)

let global = 'global'
function outer (word) {
  let outer = 'outer'
  function inner () {
    let a = 5
    console.log(word)
  }
  inner() // call the inner function.
}
console.log(outer('hello'))

var fn = arg => {
  let outer = 'Visible'
  let innerFn = () => {
    console.log(outer)
    console.log(arg)
  }
  return innerFn
}

var closureFn = fn(5)
closureFn()

const factorial = n => {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(3))

var a = { name: 'skri' }
var b = { age: 30 }
var c = { sex: 'M' }

function objectAssign (target, source) {
  var to = {}
  for (let i = 0; i < arguments.length; i++) {
    var from = arguments[i]
    var keys = Object.keys(from)
    for (let j = 0; j < keys.length; j++) {
      to[keys[j]] = from[keys[j]]
    }
  }
  return to
}

var customObjectAssign = objectAssign(a, b, c)
console.log(customObjectAssign)

// ES6 Object.Assign
var nativeObjectAssign = Object.assign({}, a, b, c)
// prints { name: 'srikanth', age: 30, sex: 'M' }
console.log(nativeObjectAssign)

var book = {
  id: 111,
  title: 'C# 6.0',
  author: 'ANDREW TROELSEN',
  rating: [4.7],
  reviews: [{ good: 4, excellent: 12 }]
}

console.log(Object.entries(book)[1])

function variadic (a) {
  console.log(a)
  console.log(arguments)
}
console.log(variadic(1, 2, 3))

const variadic2 = (a, ...variadic) => {
  console.log(a)
  console.log(variadic)
}
console.log(variadic2(1, 2, 3))

function div (x, y) {
  return x / y
}

function partialDiv (x) {
  return y => {
    return x / y
  }
}

function discount (price, discount) {
  return price * discount
}

// You see that in the long run, we would find ourselves calculating discount with 10% on a daily basis.

const price1 = discount(1500, 0.1) // $150
// $1,500 - $150 = $1,350
const price2 = discount(2000, 0.1) // $200
// $2,000 - $200 = $1,800
console.log(price1, price2)

// We can curry the discount function, so we don’t always add the 0.10 discount:

function discount (discount) {
  return price => {
    return price * discount
  }
}
const tenPercentDiscount = discount(0.1)
console.log(tenPercentDiscount(500)) // $50

const twentyPercentDiscount = discount(0.2)
console.log(twentyPercentDiscount(500))

function volume (h) {
  return w => {
    return l => {
      return l * w * h
    }
  }
}

const hCylinderHeight = volume(100)
console.log(hCylinderHeight(200)(30)) // 600,000l
console.log(hCylinderHeight(2322)(232)) // 53,870,400l

// general curry function
function curry (fn, ...args) {
  return (..._arg) => {
    return fn(...args, ..._arg)
  }
}

function volume2 (l, h, w) {
  return l * h * w
}

// arguments are function and length
const hCy = curry(volume2, 100)
console.log(hCy(200, 900))
console.log(hCy(70, 60))

// compmose
let data = parseFloat('3.56')
let number = Math.round(data)
console.log(number)
