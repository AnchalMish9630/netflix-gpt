import { useState } from 'react';
import { Header } from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import usePopularMovie from '../hooks/usePopularMovie';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';
 
 
console.log("This is 2025..........First commit")
const Browse = () => {
  // const [showGptSearch, setShowGptSearch] = useState(false);
   const showGptSearch = useSelector(store=>store.gptSlice.showGptSearch);

  useNowPlayingMovie();
  useTopRatedMovie();
  usePopularMovie();
  useUpcomingMovie();
 
  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GptSearchPage />
        ):(
          <>
           <MainContainer />
           <SecondaryContainer />
          </>
        )
      }
      
 
 
 
 
 
 
      {/* Logic for toggle using state variable.. */}
 
      {/* <Header showGptSearch={showGptSearch} setShowGptSearch={setShowGptSearch} />
      {showGptSearch ? (
        <GptSearchPage.js />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )} */}
    </div>
   
  )
}
 
export default Browse
