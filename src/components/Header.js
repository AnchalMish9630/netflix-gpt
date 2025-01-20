import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>{
    store.user;
  })
  const handleSignout = ()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className='absolute px-12  py-6 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
    <img className= 'w-[200px]' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
     alt = "logo-img"/>
     <div className='flex flex-col p-2'>
      <img className='w-12 h-12' src="https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229">
      </img>
      <button className="font-bold text-white" onClick={handleSignout }>Sign out</button>
     </div>
    
   </div>
   
  )
}
