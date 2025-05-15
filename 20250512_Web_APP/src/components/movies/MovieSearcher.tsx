//import { useMovieStore } from '../../stores/movie'
import { useMovieStore } from '@/stores/movie'


export default function MovieSearcher() {
    const fetchMovies = useMovieStore((state) => state.fetchMovies)
    const searchText = useMovieStore((state) => state.searchText)
    const setSearchText = useMovieStore((state) => state.setSearchText)
    return (
        <div>
            <input 
                className="border-2 border-gray-300"
                type="text" 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                        fetchMovies()
                    }
            }}/>
            <button onClick={fetchMovies}>Search!</button>
        </div>
    )
}