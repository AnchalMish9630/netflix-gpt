import { useState } from "react";
import { Header } from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = ()=>{
    const[isSignInForm, isSetSignInForm] = useState(true);
    const handleSignInForm = ()=>{
        isSetSignInForm(!isSignInForm);
    }
    const handleButtonClick = ()=>{
        //  checkValidateData
    }
        return(
            <div> 
                <Header />
                <div className="absolute">
                <img className="w-full"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt= "bg-img"
                />
                </div>
                <form className="w-3/12 absolute my-36 mx-auto p-12 bg-black right-0 left-0 text-white rounded-lg bg-opacity-95"
                    onSubmit={(e)=>e.preventDefault()}
                    >
                    <h1 className="font-bold text-[36px]"> {isSignInForm ? "Sign in" : "Sign up"} </h1>
                    {!isSignInForm && 
                     <input type="text"
                           placeholder="Enter full name" 
                           className="p-4 my-4 w-full bg-gray-800 rounded-md" 
                    />}
                    <input type="text"
                           placeholder="Enter email address" 
                           className="p-4 my-4 w-full bg-gray-800 rounded-md" 
                    />
                    <input 
                            type="password" 
                            placeholder="Enter password" 
                            className="p-4 my-4 w-full bg-gray-800 rounded-md"
                    />
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