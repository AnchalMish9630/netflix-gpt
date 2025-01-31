import { useState } from 'react';
import { Header } from './Header';
import useNowPlayingMovie from '../useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


console.log("This is 2025..........First commit")
const Browse = () => {

  const [title] = useState([]);

  useNowPlayingMovie();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
   
  )
}

export default Browse
