import { useContext } from 'react'
import { ColorContext } from '../App'


export default function A2() {
    const color = useContext(ColorContext)
    return (
        <>  
            <h2>{color}</h2>
        </>
    )
}