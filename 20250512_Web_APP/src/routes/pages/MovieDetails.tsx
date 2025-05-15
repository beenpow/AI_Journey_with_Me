import { useEffect } from "react";
import { useMovieStore } from "@/stores/movie";
import { useParams } from "react-router";
import Image from '@/components/image'
import Loader from "@/components/Loader";

export default function MovieDetails() {
    const { movieId } = useParams()
    const fetchMovieDetails = useMovieStore((state) => state.fetchMovieDetails)
    const currentMovie = useMovieStore((state) => state.currentMovie)
    const isLoading = useMovieStore((state) => state.isLoading)

    useEffect(() => {
        fetchMovieDetails(movieId)
    }, [movieId])

    return <>
        {isLoading ? <Loader /> : 
        currentMovie && 
        <div className="flex max-w-[1100px] gap-[20px] m-auto">
            {/* 해당 웹에서 맨 뒷자리 300을 1000으로 바꾸면 고해상도 이미지를 받을 수 있음 */}
            {/* https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg */}
            {/* https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX1000.jpg */}
            {/* <Image src={currentMovie.Poster} width={500} height={700} /> */}
            <div>
                <Image src={currentMovie.Poster.replace('SX300', 'SX1000')} width={500} height={700} />
            </div>
            <div>
                <h1 className="text-4xl font-bold">{currentMovie.Title}</h1>
                <p>{currentMovie.Plot}</p>
                <p>{currentMovie.Actors}</p>
                <p>{currentMovie.Director}</p>
                <p>{currentMovie.Writer}</p>
                <p>{currentMovie.Genre}</p>
            </div>
        </div>}
    </>
}