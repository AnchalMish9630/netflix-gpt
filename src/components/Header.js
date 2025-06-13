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
    <div className='absolute px-12  py-6 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between '>
    <img className= 'w-[200px] mx-auto md:mx-0' src={APP_LOGO}    alt = "logo-img"/>
     {user && <div className='flex p-2'>
      
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
      <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg font-bold'
      /* Logic for toggle using state variable.. */
      //  onClick={() => setShowGptSearch(!showGptSearch)}
        onClick={handleGptSearchClick}
       >{!showGptSearch ? "GPT Search" : "Home Page"}</button>
       
      <div className='flex flex-col'>
      <img
        className='w-12 h-12'
        src= {USER_LOGO}
        alt="User Profile"
      >
      </img>
      <button className="font-bold text-white" onClick={handleSignout }>Sign out</button>
      </div>
     </div>}
    
   </div>
 
  )
}
