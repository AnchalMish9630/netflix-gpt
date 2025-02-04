import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovie } from "../utils/movieSlice";

const useNowPlayingMovie = ()=>{
const dispatch = useDispatch();

const getNowPlayingMovies = async ()=>{
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3', API_OPTIONS);
  const data= await response.json();
  {
    dispatch(addNowPlayingMovie( data.results))
  }
}
useEffect(()=>{
  getNowPlayingMovies();
}, [])
}
export default useNowPlayingMovie;
