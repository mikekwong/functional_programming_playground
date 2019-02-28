import { compose } from '../lib/es8-functional'

let number = compose(
  Math.round,
  parseFloat
)

number = c => Math.round(parseFloat(c))

console.log(number('3.56'))
