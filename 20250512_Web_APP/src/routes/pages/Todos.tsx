/*
    조회, 추가, 수정, 삭제 : CRUD
*/
import TodoList from '@/components/todos/TodoList'
import TodoCreator from '@/components/todos/TodoCreator'

export default function Todos() {
    return <>
        <TodoCreator />
        <TodoList />
    </>
}