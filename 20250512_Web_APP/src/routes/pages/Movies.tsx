import MovieList from "@/components/movies/MovieList";
import MovieSearch from "@/components/movies/MovieSearcher";
import { Outlet } from "react-router";



export default function Movies() {
    return <>
        <MovieList />
        <MovieSearch />
        <Outlet />
    </>
}