import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
 
 
const MainContainer = ()=>{
 
    const  movies = useSelector(store=>store?.movies?.nowPlayingMovies)
    if(movies.length === 0) return;
    // if(!movies || movies.length === 0) return;
    const  mainMovie = movies[0]
    // if(!mainMovie) return;
    const {original_title, id, overview} = mainMovie
    return(
        <div>
             <VideoTitle title={original_title} overview={overview}/>      
             <VideoBackground movieId={id}/>
             
        </div>
    )
}
export default MainContainer;
 