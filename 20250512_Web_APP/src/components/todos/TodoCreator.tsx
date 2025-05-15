import { useTodoStore } from "@/stores/todo"


export default function TodoCreator() {
    const title = useTodoStore(state => state.title)
    const setTitle = useTodoStore(state => state.setTitle)
    const createTodo = useTodoStore(state => state.createTodo)

    return <>
        <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                    createTodo()
                }
            }}
        />
        <button onClick={createTodo}>추가</button>
    </>

}