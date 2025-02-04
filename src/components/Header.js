import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { APP_LOGO, USER_LOGO } from '../utils/constant';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';
 
export const Header = () => {
  {/* Logic for toggle using state variable.. */}
// export const Header = ({showGptSearch, setShowGptSearch}) => {
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
        console.log(user);
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
  return (
    <div className='absolute px-12  py-6 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
    <img className= 'w-[200px]' src={APP_LOGO}    alt = "logo-img"/>
     {user && <div className='flex p-2'>
      <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg font-bold'
      /* Logic for toggle using state variable.. */
      //  onClick={() => setShowGptSearch(!showGptSearch)}
        onClick={handleGptSearchClick}
 
       >GPT Search</button>
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
