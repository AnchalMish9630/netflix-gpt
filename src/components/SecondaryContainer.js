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
            <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
            <MovieList title="Upcoming" movies={movies.upcomingMovies}/>
            <MovieList title="Popular" movies={movies.popularMovies}/>
         </div>
        </div>
    )
}
export default SecondaryContainer;
