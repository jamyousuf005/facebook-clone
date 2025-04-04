import { useState } from "react";
import { createContext } from "react";




export const AuthContext= createContext()

const dummyUser={
    email: "test@example.com",
    password : "123456"
  } 

export const AuthProvider=({children})=>{

   const [user,setUser]=useState(
       JSON.parse(localStorage.getItem('user')) || null
   )

   const login = (email, password) => {
    if (email === dummyUser.email && password === dummyUser.password) {
      const userData = { email };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      
      
      return true; // Successful login
    }
    return false; // Failed login
  };


  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };



  return(
     <AuthContext.Provider value={{user,login,logout}}>
        {children}
     </AuthContext.Provider>
  )
}