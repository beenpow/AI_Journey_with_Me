import App from '@/App'
import { createBrowserRouter, RouterProvider } from 'react-router'



const router = createBrowserRouter([
    {
        path: '/',
        // 우리 사이트의 main 페이지에 접속하면 아래 요소를 보여줄거에요.
        element: <h1>Main Page</h1>
    },
    {
        path: '/about',
        // 우리 사이트의 main 페이지에 접속하면 아래 요소를 보여줄거에요.
        element: <h1>About Page</h1>
    },
])

// 위에서 만든 router 라는 컴포넌트를 사용하는 컴포넌트를 만들어주면,
// 필요한 곳에서 사용할 수 있다.
export default function Router() {
    return <RouterProvider router={router} />
}

// https://heropy.dev/
// https://heropy.dev/about
// https://heropy.dev/s