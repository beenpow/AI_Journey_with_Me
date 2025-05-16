import { createBrowserRouter, RouterProvider } from 'react-router'

import DefaultLayout from './layouts/Default'
import EmptyLayout from './layouts/Empty'

import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Todos from './pages/Todos'

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                // 우리 사이트의 main 페이지에 접속하면 아래 요소를 보여줄거에요.
                element: <Home />
            },
            {
                path: '/about',
                // 우리 사이트의 main 페이지에 접속하면 아래 요소를 보여줄거에요.
                element: <About />
            },
            {
                path: '/movies',
                element: <Movies />,
                // 중첩 라우팅 으로 MovieDetails 를 Movie 를 거쳐서 가도록 변경
                children: [
                    {
                        path: ':movieId',// movies/123
                        element: <MovieDetails />
                    }
                ]
            },
            
        ]
    },
    {
        element: <EmptyLayout />,
        children: [
            {
                path: '/todos',
                element: <Todos />
            }
        ]
    }
])

// 위에서 만든 router 라는 컴포넌트를 사용하는 컴포넌트를 만들어주면,
// 필요한 곳에서 사용할 수 있다.
export default function Router() {
    return <RouterProvider router={router} />
}

// https://heropy.dev/
// https://heropy.dev/about
// https://heropy.dev/s