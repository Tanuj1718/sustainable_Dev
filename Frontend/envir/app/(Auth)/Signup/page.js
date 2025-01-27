'use client';

import { Navbar } from '@/app/Components/Navbar';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import Image from "next/image";
import googleSymbol from "../Signup/googleimg.png";
import { useState } from "react";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function UserData() {


    const [email , setEmail] = useState("")
    const [userName , setUserName] = useState("")

    const router = useRouter();
  
    const singupUser = async()=>{
      await axios.post("http://localhost:3000/userSignup" , {
        username : userName,
        email : email
      })
      .then((response)=>{
        localStorage.setItem("Authorization" , "Bearer " + response.token)
        alert(response.data.msg)
        console.log(response.data.msg)
        setTimeout(()=>router.push("/") , 2000)
      })

      .catch(error=>{
        console.log("Something went wrong " + error)
        alert("Something went wrong " + error)
      })
    }
  
  
  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    console.log('Decoded User Info:', decoded);

    const { name, email, picture } = decoded;
    setEmail(email)
    setUserName(name)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Picture:', picture);
    singupUser()
  };

  return (
    <>
      <div className='min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-green-900'>
        <Navbar />
        <div className='w-full min-h-screen px-4 flex justify-center items-center'>
          <div className='w-full max-w-[400px] min-h-[400px] bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-6 mx-auto my-8  sm:p-8 md:gap-8'>
            <div className='relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28'>
              <Image src={googleSymbol} className='rounded-full object-cover' alt='google image' fill sizes="(max-width: 640px) 80px,  (max-width: 768px) 96px, 112px"/>
            </div>
            
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>
              Welcome Chat!!
            </h1>
            
            <div className='w-full flex justify-center flex-col space-y-3 items-center'>
              <GoogleOAuthProvider clientId="819539479154-ddf4ovgv77fg8quni4hq5qf79oscthja.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </GoogleOAuthProvider>
             <Link href={"/Signin"}><h1 className='text-center'>Already Have a account? Login</h1></Link> 
            </div>
           </div>
           </div>
          </div>
    </>
  );
}