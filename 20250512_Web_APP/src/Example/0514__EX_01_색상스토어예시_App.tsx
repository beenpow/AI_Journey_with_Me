import {useState, createContext} from 'react'
import { useColorStore } from '../stores/color'

export const ColorContext = createContext('')

export default function App() {
    const color = useColorStore((state) => /*return 생략가능*/state.color)
    // color.ts 에 정의된 'setColor' 라는 함수를 useColorStore 를 통해서 가져오고,
    // 이걸 setColor 이라는 변수에 저장한다.
    const setColor = useColorStore((state) => state.setColor)
    return (
        <>
            
            <h1 style={{color: color}} // 색까지 같이 변경해주기!
            onClick={() => setColor('blue')}>App: {color} </h1>
        </>

        // <ColorContext.Provider value={color}>
        //     <h1>{color} </h1>
        // </ColorContext.Provider>
    )
}