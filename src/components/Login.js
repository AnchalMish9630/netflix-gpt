import { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidateData } from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_LOGO } from "../utils/constant";
import { BG_IMG_URL } from "../utils/constant";

const Login = ()=>{
    const[isSignInForm, isSetSignInForm] = useState(true);
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    const [message, setMessage] = useState(null);
    const handleSignInForm = ()=>{
        isSetSignInForm(!isSignInForm);
    }
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = ()=>{
    const errorMessage =  checkValidateData(email.current.value, password.current.value, !isSignInForm ? name.current.value : "");
    setMessage(errorMessage);
    // Sign-in/ Sign-up logic after valiodation
    // if(message === null) OR 
    if(message) return;    //if msg is there that means some error is there , program will stop otherwise move to account creation
    // if msg exist i,e. error : then user needs to sign-in/sign-up

    if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // currently after this api display name is going null, so update the display name with the name we are entering in name input box
            updateProfile(auth.currentUser, {
                displayName: name.current.value, 
                photoURL: USER_LOGO
              }).then(() => {
                const {uid, email, displayName} = user; //doubt ...........
                dispatch(addUser({
                uid : uid,
                email: email,
                displayName: displayName
        }))
                navigate("/browse");
              }).catch((error) => {
               setMessage(error.message)
              });
              
           
            })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorCode+errorMessage);
    });
    }
    else{
        signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User signed up..", user)
            navigate("/browse");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorCode+errorMessage);
    });
    }
  }
        return(
            <div> 
                <Header />
                <div className="absolute">
                <img className="w-full"
                src={BG_IMG_URL}
                alt= "bg-img"
                />
                </div>
                <form className="w-3/12 absolute my-36 mx-auto p-12 bg-black right-0 left-0 text-white rounded-lg bg-opacity-95"
                    onSubmit={(e)=>e.preventDefault()}
                    >
                    <h1 className="font-bold text-[36px]"> {isSignInForm ? "Sign in" : "Sign up"} </h1>
                    {!isSignInForm && 
                     <input ref={name} 
                           type="text"
                           placeholder="Enter full name" 
                           className="p-4 my-4 w-full bg-gray-800 rounded-md" 
                    />}
                    <input ref={email}
                           type="text"
                           placeholder="Enter email address" 
                           className="p-4 my-4 w-full bg-gray-800 rounded-md" 
                    />
                    <input  ref={password}   // by this get the refrence of the input box.
                            type="password" 
                            placeholder="Enter password" 
                            className="p-4 my-4 w-full bg-gray-800 rounded-md"
                    />
                    <p className="font-bold text-lg text-red-500 py-2">{message}</p>
                    <button 
                            className="p-4 my-6 w-full rounded-lg bg-red-700"
                            onClick={handleButtonClick}
                        >
                        {
                            isSignInForm ? "Sign in" : "Sign up" 
                        }
                    </button>
                    <p className="py-4 cursor-pointer" onClick={handleSignInForm}>
                        {isSignInForm ? "New to Netflix? Sign Up now." : "Already registered? Sign in now."} 
                    </p>
                </form>
               
        </div>
        )
}
export default Login;