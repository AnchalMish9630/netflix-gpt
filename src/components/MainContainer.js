import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = ()=>{
    const  movies = useSelector(store=>store?.movies?.nowPlayingMovies)
    console.log(movies, "Hello");
    if(!movies) return;
    const  mainMovie = movies[0]
    // const {original_title, id, overview} = mainMovie
    return(
        <div>
             Main Container  
             {/* <VideoTitle title={original_title} overview={overview}/>       */}
             <VideoBackground />
             
        </div>
    )
}
export default MainContainer;