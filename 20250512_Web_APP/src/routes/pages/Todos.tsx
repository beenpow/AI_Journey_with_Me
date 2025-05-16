/*
    조회, 추가, 수정, 삭제 : CRUD
*/
import TodoList from '@/components/todos/TodoList'
import TodoCreator from '@/components/todos/TodoCreator'
import { Link } from 'react-router'

export default function Todos() {
    return <>
        <Link to="/">Main</Link>
        <TodoCreator />
        <TodoList />
    </>
}