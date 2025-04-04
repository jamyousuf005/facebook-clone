import { useContext, useState } from "react"
import { AuthContext} from "./AuthContext"
import { useNavigate } from "react-router"




const LoginCard = () => {
    const navigate = useNavigate()

 const {login}=useContext(AuthContext)


   const [formData,setFormData]=useState({
    email:"",
    password:""
   })

    const handleChange=(e)=>{
            const {name,value} = e.target;
             setFormData((prevData)=>({
                ...prevData,
                [name]:value,
             }))   
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    if (login(formData.email, formData.password)) {
      console.log("Login successful!");
      setFormData({password:""})
       navigate("/HomePosts")
    } else {
      console.log("Login failed!");
      };
    }


    return (
        <div className='bg-white w-[260px] md:w-[300px] h-[270px] p-4 shadow-lg rounded'>
          
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2'>
                
                <input
                    className='w-full p-2 border border-gray-300 rounded'
                    placeholder='Email address or phone number'
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                     />

                <input
                    className='w-full p-2  border border-gray-300 rounded'
                    placeholder='Password'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    />

                  

                <button type='submit' 
                className='bg-blue-600 cursor-pointer w-full p-2 rounded text-white font-bold'>
                    Log in</button>
               
                 
            
                <div className='cursor-pointer hover:unerline text-blue-600 text-sm flex justify-center'>
                    <p>Forgotten Password</p>

                </div>


                <div className='flex flex-col gap-2'>
                    <hr className=' border-gray-400' />

                    <div className='flex justify-center mt-4'>
                        <button className='bg-green-600  p-2 rounded text-white font-bold' >
                            Create new Account</button>
                    </div>

                </div>

            </div>

            </form>
          

        </div>
    )
}

export default LoginCard