import { useState, useEffect } from 'react'

// React Hook(훅)
// useXXX <= Hook


// Search 의 우클릭해서 찾아낸 타입 정의
export type Movies = Movie[]

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}


export default function App() {
    const [movies, setMovies] = useState<Movies>([])

    // 쿼리스트링
    async function fetchMovies() {
        const res = await fetch('https://omdbapi.com?apikey=7035c60c&s=avengers')
        // data = await res.json(), console.log(data) 라고 해보면
        // 개발자도구 > 'Fetch/XHR' 탭 > Preview 탭에서 확인 가능
        // 확인해보면 'Search' 키에 배열이 들어있음 -> 따라서 이걸 그냥 축약시킴.
        // Search 우클릭 > copy object > "https://transform.tools/json-to-typescript" 의 JSON 에 붙여넣기
        // 하면, 우측에 TypeScript 타입 정의가 나옴.
        const { Search} = await res.json()
        setMovies(Search)
    }

    // useEffect(실행할 함수, 의존성 배열)
    // 컴포넌트가 마운트되면 실행되는 훅. 단 1번만 실행된다.
    // 의존성 배열에 넣은 값이 변경되면 실행된다. -> 비워져있는 경우([]) 컴포넌트가 마운트될 때 1번만 실행된다.
    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <h1>영화 목록</h1>
            <ul>
                {movies.map(movie => {
                    return <li key = {movie.imdbID}>{movie.Title}</li>
                })}
            </ul>
        </>
    )
}