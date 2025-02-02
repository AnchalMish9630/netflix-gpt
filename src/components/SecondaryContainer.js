import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
 
const SecondaryContainer = ()=>{
    const movies = useSelector(store=> store.movies)
 
    return(
        movies.nowPlayingMovies &&
        <div className="bg-black">
            <div className="-mt-60 pl-12 z-20 relative">
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
            <MovieList title="Tredning" movies={movies.nowPlayingMovies}/>
            <MovieList title="Horror" movies={movies.nowPlayingMovies}/>
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
            </div>
        </div>
    )
}
export default SecondaryContainer;
