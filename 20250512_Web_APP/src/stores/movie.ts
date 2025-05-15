import axios from 'axios'
import { combine } from 'zustand/middleware'
import { create } from 'zustand'

export type Movies = Movie[]
export interface Movie {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export const useMovieStore = create(
    combine({
        isLoading: false,
        searchText: '',
        movies: [] as Movies,
        message: '',
    }, ((set, get) => ({
        setSearchText: (searchText: string) => {
            set({ searchText })
        },
        fetchMovies: async () => {
            const { isLoading, searchText } = get()
            // 아무것도 입력하지 않은 경우 예외 처리
            if (!searchText.trim()) return
            if (isLoading) return
            set({ isLoading: true,
                message: '',
             })
            // resolve 라는 매개변수(함수) 를 가지는 callback 함수 등록
            // 3초 뒤에 resolve 함수를 호출
            // await new Promise((resolve) => setTimeout(resolve, 3000))
    //        const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${searchText}`)
            const {
                data: {
                    Search: movies = [],
                    Response,
                    Error,
                },
            } = await axios(`https://omdbapi.com/?apikey=7035c60c&s=${searchText}`)
    //      const { Search: movies = [], Response, Error } = await res.json()
            
            if (Response === 'False') {
                set({
                    message: Error,
                    isLoading: false,
                })
                return
            }
            set({ movies: movies })
            set({ isLoading: false })
            if (!movies.length) {
                set({
                    message: '검색 결과가 없습니다.',
                })
                return
            }
        }
    })))
)