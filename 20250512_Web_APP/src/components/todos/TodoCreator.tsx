import { useTodoStore } from "@/stores/todo"
import Button from "@/components/Button"
import { useState } from "react"

export default function TodoCreator() {
    const [loading, setLoading] = useState(false)
    const title = useTodoStore(state => state.title)
    const setTitle = useTodoStore(state => state.setTitle)
    const createTodo = useTodoStore(state => state.createTodo)

    async function handleCreateTodo() {
        setLoading(true)
        await createTodo()
        setLoading(false)
    }

    return <>
        <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                    handleCreateTodo()
                }
            }}
        />
        {/* 그냥 button 말고, 방금 우리가 만든(Button.tsx) 컴포넌트를 사용해보자 */}
        <Button onClick={handleCreateTodo} loading={loading}>추가</Button>
    </>

}