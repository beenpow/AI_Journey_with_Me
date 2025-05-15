// import Image from './components/image'
import MovieSearcher from '@/components/movies/MovieSearcher'
import MovieList from '@/components/movies/MovieList'

export default function App() {

    return <>

        {/* <Image src="https://heropy.dev/favicon.png" /> */}
        {/* <Image 
            src="https://picsum.photos/1000/500"
            width={1000}
            height={500} />
        <Image
            src="https://picsum.photos/500/300"
            width={500}
            height={300} /> */}
        <MovieSearcher />
        <MovieList />
    </>
}