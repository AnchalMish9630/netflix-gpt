import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';
import { BG_IMG_URL } from '../utils/constant';


const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
                <img className="w-full"
                src={BG_IMG_URL}
                alt= "bg-img"
                />
                </div>
      <GptMovieSuggestions />
      <GptSearchBar />
     
    </div>
  )
}
 
export default GptSearchPage;