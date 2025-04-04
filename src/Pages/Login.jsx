import React from 'react'
import LoginCard from '../Components/LoginCard'
import logo from "../../Assets/logo.svg"

const Login = () => {
    return (
        <div className='flex min-h-screen w-full justify-around items-center flex-col-reverse
     md:flex-row overflow-hidden bg-gray-200 p-4'>

            <div className='flex flex-col p-2'>
                <div>
                    <img className='w-[250px]' src={logo} alt="" />
                </div>
                <div>
                    <p className='text-[15px] md:text-xl ml-6'>
                        facebook helps you connect and <br />
                        share with people in your life</p>
                </div>
            </div>

            <LoginCard />

            </div>


       
    )
}

export default Login