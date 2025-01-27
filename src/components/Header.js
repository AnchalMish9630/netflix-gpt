import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { APP_LOGO, USER_LOGO } from '../utils/constant';

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  const handleSignout = ()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className='absolute px-12  py-6 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
    <img className= 'w-[200px]' src={APP_LOGO}    alt = "logo-img"/>
     {user && <div className='flex flex-col p-2'>
      <img 
        className='w-12 h-12' 
        src= {USER_LOGO}
        alt="User Profile"
      >
      </img>
      <button className="font-bold text-white" onClick={handleSignout }>Sign out</button>
     </div>}
    
   </div>
   
  )
}
