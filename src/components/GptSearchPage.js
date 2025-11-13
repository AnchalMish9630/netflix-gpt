import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';
import { BG_IMG_URL } from '../utils/constant';


const GptSearchPage = () => {
  return (
    <>
     <div className="absolute -z-10">
                <img 
                 className="w-full h-screen object-cover md:h-auto md:object-fill"
                src={BG_IMG_URL}
                alt= "bg-img"
                />
                </div>
    <div className=''>
     
      <GptMovieSuggestions />
      <GptSearchBar />
     
    </div>
    </>
  )
}
 
export default GptSearchPage;