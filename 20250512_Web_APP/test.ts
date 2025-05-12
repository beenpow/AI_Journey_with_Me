// Interfaces
interface User {
  name: string
  age: number
  gender: string
}

const a: User = {
  name: 'John',
  age: 20,
  gender: 'male'
}

console.log(a)

// Return Type
function add(a: number, b: number): number {
  return a + b
}

console.log(add(1, 2))

// Void
function log(msg: string): void {
  console.log(msg)
}

log('Hello, world!')

const numbers: never[] = []
console.log(numbers[0])

// Union Types
function add2(a: string | number, b: string | number): string | number {
  return a + b
}

console.log(add2('1', '2'))
console.log(add2(1, 2))

interface UserA {
  name: string
}

interface UserB {
  age: number
}

interface UserC {
  name: string
  age: number
}
// naively
const A: UserC = {
  name: 'Neo',
  age: 20
}
// intersection
const B: UserA & UserB = {
  name: 'Neo',
  age: 20
}

const data = {
  currentUser: null
}
function login() {
  const userFromServer = fetchUserFromServer()
  data.currentUser = userFromServer
}

// Mon. 13:00 ~ 14:00
export interface User2 {
  name: string
  age: number
  email: string[]
  isValid?: boolean
}

const neo: User2 = {
  name: 'Neo',
  age: 20,
  email: ['neo@gmail.com']
  //  isValid: true
}

// 타입 별칭(Type Alias)
export type BooleanOrString = boolean | string
