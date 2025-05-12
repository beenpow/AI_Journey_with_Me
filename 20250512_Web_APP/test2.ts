// Mon. 13:00 ~ 14:00
// Keyword 'type'
import type { User2 } from './test'

const Evan: User2 = {
  name: 'Evan',
  age: 20,
  email: ['Evan@gmail.com'],
  isValid: true
}

import { BooleanOrString } from './test'

// Generic <타입변수>
function add<T>(a: T, b: T): T {
  return a + b
}
// type 생략 가능
console.log(add(1, 2))
console.log(add('1', '2'))
console.log(add(true, false))
console.log(add<number | string>(1, '2'))
console.log(add<BooleanOrString>('1', '2'))

// console.log(add<number>(1, 2))
// console.log(add<string>('1', '2'))
// console.log(add<boolean>(true, false))
// console.log(add(1, '2'))
