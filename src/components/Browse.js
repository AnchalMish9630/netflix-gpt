import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../utils/movieSlice';

console.log("This is 2025..........First commit")
const Browse = () => {

  const [title, setTitle] = useState([]);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async ()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const data= await response.json();
    setTitle(data.results);
    {
      dispatch(addNowPlayingMovie({
          movieName: data.results.original_title
      }))
    }
  }

  useEffect(()=>{
    getNowPlayingMovies();

  }, [])


  return (
    <div>
      <Header />
      {title.map((item) => (
        <div key={item.id} className='bg-lime-400'>
              <h1>{item.original_title}</h1>
        </div>

      ))}
    </div>
   
  )
}

export default Browse
