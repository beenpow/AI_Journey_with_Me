import type { Movie } from '@/stores/movie'
import Image from '@/components/image'

export default function MovieItem({ movie }: { movie: Movie }) {
    return (
        <div>
            {/* <img src={movie.Poster} alt={movie.Title} /> */}
            <Image src={movie.Poster} width={200} height={300} />
            {movie.Title} / {movie.Year}
        </div>
    )
}