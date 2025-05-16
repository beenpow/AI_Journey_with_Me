import { useState, useEffect, useRef } from 'react'
//import type{ Todo } from '@/stores/todo' // 아래처럼 type 을 괄호 안에 넣어버릴 수 있음!!
import { useTodoStore, type Todo } from '@/stores/todo'


export default function TodoItem( { todo } : { todo : Todo }) {
    const [isEditMode, setIsEditMode] = useState(false)
    const [title, setTitle] = useState(todo.title)
    const updateTodo = useTodoStore(state => state.updateTodo)
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (isEditMode) {
            // 포커스
            inputRef.current?.focus()
        }
    }, [isEditMode])

    return <div className='flex gap-[10px]'>
        {isEditMode ? (
            <div>
                <input 
                    ref={inputRef}
                    className="border-1 border-gray-400 rounded-md"
                    type="text" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value)}}
                    onKeyDown={(e) => {
                        if (e.nativeEvent.isComposing) return
                        if (e.key === 'Enter') {
                            updateTodo({
                                // 전개되는 객체에 있는 title 은 내가 주는 title 로 바꿔줘
                                ...todo,
                                title: title
                            })
                            setIsEditMode(false)
                        }
                        if (e.key === 'Escape') {
                            setIsEditMode(false)
                        }
                    }}
                />
                <button onClick={() => {
                    updateTodo({
                        ...todo,
                        title: title
                    })
                    setIsEditMode(false)
                }}>저장</button>
            </div>
        ) : (
            <>
                <div>{todo.title}</div>
                <button 
                    className="bg-blue-500 text-white rounded-md px-2"
                    onClick={() => setIsEditMode(true)}>수정</button>
            </>
        )}
    </div>
}