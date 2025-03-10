import { useSelector } from "react-redux";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
const VideoBackground = ({movieId})=>{
    
    const trailerVideo = useSelector((store)=>store.movies.trailerVideo);
    useNowPlayingMovie(movieId);
    return(
        <div className="">
            <iframe
                className="w-screen aspect-video "
                src={"https://www.youtube.com/embed/LH1J1EbqCaI?si="+trailerVideo?.key+"?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
               ></iframe>
        </div>
    )
}
export default VideoBackground;