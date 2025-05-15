import { useTodoStore } from "@/stores/todo"


export default function TodoCreator() {
    const title = useTodoStore(state => state.title)
    const setTitle = useTodoStore(state => state.setTitle)

    return <>
        <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
        />
    </>

}