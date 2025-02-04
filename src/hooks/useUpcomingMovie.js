
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";

const useUpcomingMovie = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchUpcomingMovies = async ()=>{
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' ,API_OPTIONS);
            const data = await response.json();
            dispatch(addUpcomingMovie(data.results))
        }
        fetchUpcomingMovies();
    },[])
}
export default useUpcomingMovie;