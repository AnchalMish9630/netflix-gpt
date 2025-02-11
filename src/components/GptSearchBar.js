import React, { useRef } from "react";
import { language } from "../utils/languageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";


const GptSearchBar = ()=>{

   
    const langKey = useSelector((store)=> store.config.language)
    return(
        <div className="pt-[10%] flex justify-center">
             <form onSubmit={(e)=>e.preventDefault()}
                className='w-1/2 bg-black grid grid-cols-12'>
            <input type="text" 
                    ref={searchText}
                   placeholder={language[langKey].gptPlaceholder} 
                   className="p-4 m-4 col-span-9"/>
        
            <button
                onClick={onHandleSearchClick}
                className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
                {language[langKey].search}
            </button>
            </form>
        </div>
    )
}
export default GptSearchBar;