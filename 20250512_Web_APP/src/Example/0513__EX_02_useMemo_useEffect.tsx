import { useState, useMemo, useEffect } from 'react'

export default function App() {
    const [count, setCount] = useState(1)
    // useMemo(실행할 함수, 의존성 배열) : 계산된 값을 메모이제이션(Memoization) 하는 훅
    // 의존성 배열에 넣은 값이 변경되면 실행된다. -> 비워져있는 경우([]) 컴포넌트가 마운트될 때 1번만 실행된다.
    // useMemo는 계산된 값으로 새로운 데이터를 만들 수 있다!
    const double = useMemo(() => {
        return count * 2
    }, [count])
    // useEffect(실행할 함수, 의존성 배열) : 데이터 감시
    // 데이터가 변경되는 걸 감지하고 실행되는 훅
    useEffect(() => {
        console.log(`double은 ${double} 입니다.`)
    }, [double])
    return (
        <>
            <h1 onClick={() => setCount(count + 1)}>카운트: {count}</h1>
            <h2>Double: {double}</h2>
        </>
    )
}