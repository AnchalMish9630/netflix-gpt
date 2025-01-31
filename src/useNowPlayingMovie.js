import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "./utils/constant";
import { addNowPlayingMovie } from "./utils/movieSlice";

const useNowPlayingMovie = ()=>{
const dispatch = useDispatch();

const getNowPlayingMovies = async ()=>{
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
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
