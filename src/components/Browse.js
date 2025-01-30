import { useState } from 'react';
import { Header } from './Header';
import useNowPlayingMovie from '../useNowPlayingMovie';


console.log("This is 2025..........First commit")
const Browse = () => {

  const [title] = useState([]);

  useNowPlayingMovie();

  return (
    <div>
      <Header />

    </div>
   
  )
}

export default Browse
