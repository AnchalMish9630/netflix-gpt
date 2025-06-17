import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { APP_LOGO, USER_LOGO } from '../utils/constant';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';


export const Header = () => {
  {/* Logic for toggle using state variable.. */}
// export const Header = ({showGptSearch, setShowGptSearch}) => {
   const showGptSearch = useSelector(store=>store.gptSlice.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user);
  const handleSignout = ()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  const handleGptSearchClick = ()=>{
    dispatch(toggleGptSearch());
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({
          uid : uid,
          email: email,
          displayName: displayName
        }))
        navigate("/browse");
      } else {
          dispatch(removeUser());
          navigate("/");
      }
    });
    return ()=>unsubscribe();
    
  }, []);
  const handleChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  return (
   <div className='absolute md:px-12 px-4  py-6 bg-gradient-to-b from-black md:z-10 z-40 w-screen flex flex-row justify-between '>   
    <img className= 'md:w-[200px] w-[150px]' src={APP_LOGO}    alt = "logo-img"/>
     {user && <div className='flex md:p-2 pl-2'>
      
      {showGptSearch && 
      (<select className='p-2 m-2 bg-gray-900 text-white' onChange={handleChange}>
        {
          SUPPORTED_LANGUAGES.map((lang)=>
            <option value={lang.value}>{lang.label}</option>)
        }
        {/* <option value="en">English</option>
        <option value="hi">हिन्दी</option> */}
       </select>)
    }
      <button
         className="
    py-2 px-4 mx-4 my-2 
    border border-white text-white rounded-full
    hover:bg-white hover:text-black transition-all duration-200
    font-semibold

    md:bg-red-700 md:text-white md:rounded-lg md:border-none
    md:hover:bg-red-800 md:hover:text-white
  "
              //  className=' py-2 px-4 mx-4 my-2 bg-red-700 text-white rounded-lg font-bold'
      /* Logic for toggle using state variable.. */
      //  onClick={() => setShowGptSearch(!showGptSearch)}
        onClick={handleGptSearchClick}
       >{!showGptSearch ? "SearchGPT" : "Home"}</button>
       
      <div className='flex flex-col'>
      <img
       className='w-12 h-12 hidden md:block'
        src= {USER_LOGO}
        alt="User Profile"
      >
      </img>
      <button className="font-bold text-white md:pt-0 pt-4" onClick={handleSignout }>Log Out</button>
      </div>
     </div>}
    
   </div>
 
  )
}
