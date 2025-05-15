//.tsx = java script + typescript
// java script 문법
// 1. function() {} // 일반 함수
// 2. () => {} // 화살표 함수
import { useState } from 'react'
export default function App() {
// 특정 변수의 타입을 명시적으로 작성하는 행위 : 타이핑
// const a: number = 1

  const [title, setTitle] = useState('Hello world!')
  const [width, setWidth] = useState(200)
  
// 매개변수 event 의 type 을 지정해줘야 한다.
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.currentTarget.value)
  }
// 여기서 말하는 'event.currentTarget' 은 'input' 요소를 의미함.
// 한글을 입력하고 엔터치면, console print 가 두번 된다!
// 안녕하세요 : key 12 개 입력이지만 5글자
// 반갑습니다 : key 13 개 입력이지만 5글자
// 즉, 한글(Chinese, Japanes, Korean : CJK문자) 은 : 글자 수 != key 수
// 글자 작성중에는 한글자가 끝나는지 안끝나는지 알수가없기때문에, CJK 는 '입력중' 이라는 isCompoisng 이라는 속성이 있다!
// 따라서, '입력중' 에서 함수 한번 실행되고, '입력완료'에서 한번 실행되기 때문에 총 2번 출력된다.
// 이를 해결하기 위해서, 사용자가 엔터키를 누르고 & !isComposing (입력중이 아닐때만) 로그를 출력해줘
// 하지만, isComposing 은 javascript 의 속성이므로, 'nativeEvent' 를 통해서 접근해야 한다.
// nativeEvent 를 쓰지않으면, event type 자체가 React 라서 오류가 난다.
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      setTitle(event.currentTarget.value)
      console.log(event.currentTarget.value)
    }
  }

  function handleBoxClick() {
    setWidth(width + 100)
  }

  return <>
    {/* input 이라고만 쳐도 똑같이 취급된다. 
      <input type="text" />
    */}
    {/* 양방향 데이터 바인딩 - two way*/}
    {/* title : 단방향 데이터 바인딩 - one way*/}

    <input
      /* 사용자가 입력하는 데이터를 'title' 로 받아서 양방향으로 처리 */
      /* event 속성은, event 객체를 받아서 처리하는 함수 */
      value={title}
      /*onChange={event => setTitle(event.target.value)}*/
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      />
    <h1 className={title.length > 12 ? 'active' : ''}>{title}</h1>
    <div 
      style={{
        /* javascript 문법 : template literal */
        width: `${width}px`,
      }}    
      className="box"
      onClick={handleBoxClick}></div>
    {/* Emmet 문법   .box, #box -> tab */}
    {/*  .container>.inner>ul>li*5 -> tab 하면 자동 완성된다.*/}

  </>
}