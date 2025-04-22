import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth,db } from './Firebase';

import {setDoc,doc} from 'firebase/firestore'
import { toast } from 'react-toastify';

export default function FacebookSignup() {

   const [fname,setFname]=useState('')
   const [lname,setlname]=useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      // Create the user account
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser
      
      if(user) {
        // Save user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname
        })
        
        // Sign out completely before showing toast
        await auth.signOut()
        
        // Show success message and navigate immediately
        toast.success("User Registered Successfully", {
          position: "top-center",
          autoClose: 2000
        })
        
        // Navigate immediately, don't wait for toast
        navigate('/Login')
      }
    } catch(error) {
      console.log(error.message)
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 2000
      })
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">facebook</h1>
          <p className="text-xl mt-2">Create a new account</p>
          <p className="text-sm text-gray-500">It's quick and easy.</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <input
                onChange={(e)=>setFname(e.target.value)}
                required
                type="text"
                name="firstName"
                placeholder="First name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="w-1/2">
              <input
              onChange={(e)=>setlname(e.target.value)}
                type="text"
                required
                name="lastName"
                placeholder="Last name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <input
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          
          <div className="mb-6">
            <input
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              required
              name="password"
              placeholder="New password"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

         <div > 
          <div className="text-xs text-gray-500 mb-4">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
          </div>
             <p className='text-lg   text-gray-500 mb-4'>Already Registered? 
                <Link className='text-blue-500   underline pl-2' to="/Login">Login</Link></p>
          </div>
          <div className="flex justify-center">
            <button
             type='submit'
           
              className="bg-green-600 text-white py-2 px-12 rounded-md text-xl font-bold hover:bg-green-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}