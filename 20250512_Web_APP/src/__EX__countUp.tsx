//.tsx = java script + typescript
// java script 문법
// 1. function() {} // 일반 함수
// 2. () => {} // 화살표 함수
import { useState } from 'react'
export default function App() {
  const title = 'React'
  const a = 1
  const b = 7
  //let count = 0
//    gettset, setter (비동기 업데이트 된다.)
const [count, setCount] = useState(0)

function handleClick() {
  const newCount = count + 1
  setCount(newCount)
  console.log('count: ', newCount)
}
  return (
    <>
    <h1>Hello World {title}</h1>
    <h2 onClick={handleClick}>Count: {count}</h2>
    </>
  )
}