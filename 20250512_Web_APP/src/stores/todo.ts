import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

// https://curse-battery-d1c.notion.site/25-05-Web-Front-End-1dec672eb95e80f5ab4df1de9cb76972 
// 위 노션 페이지에서 아래 정보를 받아옴
type Todos = Todo[] // 할 일 목록
interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

export const useTodoStore = create(
    combine({
        // 서버에서 받아온 데이터를 저장할 공간.
        title: '',
        todos: [] as Todos,
    }, 
    (set, get) => {
        // createTodo() 함수 내에서 fetchTodos() 함수를 호출할 수 있게 하기 위해서 모든 함수를 return 에서 밖으로 빼준다.
        function setTitle(title: string) {
            set({ title: title })
        }
        // 서버와 통신할 함수 하나.
        async function fetchTodos() {
            const todos = await requestTodos({
                method: 'GET'
            })
            set({ todos: todos })
        }
        async function createTodo() {
            const { title } = get()
            await requestTodos({
                method: 'POST',
                data: {
                    title: title,
                }
            })
            await fetchTodos()
        }
        async function updateTodo(todo: Todo) {
            await requestTodos({
                todoId: todo.id,
                method: 'PUT',
                data: {
                    title: todo.title,
                    done: todo.done
                }
            })
            await fetchTodos()
        }
        return {
            setTitle,
            fetchTodos,
            createTodo,
            updateTodo
        }
    }) 
)

async function requestTodos({
    todoId = '',
    method,
    data
}: {
    todoId?: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: unknown
}) {
    const { data: returnValue } = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`,
        method,
        headers: {
            'content-type': 'application/json',
            apikey: 'KDT8_bcAWVpD8',
            username: 'KDT8_ParkYoungWoong'
        },
        data
    })
    return returnValue
}