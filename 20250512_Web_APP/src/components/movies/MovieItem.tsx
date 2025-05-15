import type { Movie } from '@/stores/movie'
import Image from '@/components/image'
import { Link } from 'react-router' 

export default function MovieItem({ movie }: { movie: Movie }) {
    return (
        <div className="w-[200px]">
            {/* <img src={movie.Poster} alt={movie.Title} /> */}
            <Image src={movie.Poster} width={200} height={300} />
            <Link to={`/movies/${movie.imdbID}`}>
                {movie.Title} / {movie.Year}
            </Link>
        </div>
    )
}