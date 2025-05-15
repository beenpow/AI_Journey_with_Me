import { useEffect } from 'react'
/*
    stored/todo.ts 에 선언해둔, combine 을 위해 create 로 선언한 export 함수를 여기서 불러온다.
*/
import { useTodoStore } from '@/stores/todo'


export default function TodoList() {
    const todos = useTodoStore(state => state.todos)
    const fetchTodos = useTodoStore(state => state.fetchTodos)
    useEffect(() => {
        fetchTodos()
    }, [])
    return <div>
        {todos.map(todo => (
            <div key={todo.id}>{todo.title}</div>
        ))}
    </div>
}
