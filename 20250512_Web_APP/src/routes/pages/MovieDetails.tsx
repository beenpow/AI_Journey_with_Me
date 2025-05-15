import { useEffect } from "react";
import { useMovieStore } from "@/stores/movie";
import { useParams } from "react-router";

export default function MovieDetails() {
    const fetchMovieDetails = useMovieStore((state) => state.fetchMovieDetails)
    const { movieId } = useParams()
    useEffect(() => {
        fetchMovieDetails(movieId)
    }, [movieId])
    return <>
        
    </>
}