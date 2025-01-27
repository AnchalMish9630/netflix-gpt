import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

 const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/browse",
        element: <Browse /> // only for authenticate users
      }
    ]
  )
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
      } else {
          dispatch(removeUser());
      }
    });
    return ()=>unsubscribe();
    
  }, []);

  return (
    <div>   
      <RouterProvider router={appRouter}></RouterProvider>
      </div>
  )
}
export default Body;
