//.tsx = java script + typescript
// java script 문법
// 1. function() {} // 일반 함수
// 2. () => {} // 화살표 함수
import { useState } from 'react'
export default function App() {
  const [title, setTitle] = useState('Hello world!')
  
  return <>
    {/* input 이라고만 쳐도 똑같이 취급된다. 
      <input type="text" />
    */}
    {/* 양방향 데이터 바인딩 - two way*/}
    {/* title : 단방향 데이터 바인딩 - one way*/}

    {/* 사용자가 입력하는 데이터를 'title' 로 받아서 양방향으로 처리 */}
    {/* event 속성은, event 객체를 받아서 처리하는 함수 */}
    <input
      value={title} 
      onChange={event => setTitle(event.target.value)}
      />
    <h1>{title}</h1>
  </>
}