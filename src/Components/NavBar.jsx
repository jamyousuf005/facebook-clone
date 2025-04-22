import React, { useContext, useState } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { LuGamepad2 } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import logo from '../../Assets/logo.svg'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import dp from '../../Assets/dp.jpg'
import { DataContext } from './DataContext';
import { Link, useAsyncError, useLocation } from 'react-router-dom';



const NavBar = () => {

    const [searchVisible, setSearchVisible] = useState(false)

    const toggleSearch = () => {
        setSearchVisible(!searchVisible)
    }
    
    const {handleChange,searchFriends,filteredFriends,
        searchNewVisible,toggleNewSearch}=useContext(DataContext)

      const location = useLocation()

      const isActive = (path) => location.pathname === path  

    return (
        <div className='w-full relative'>
            <nav className={searchVisible ?  `bg-white relative lg:hidden items-center 
            text-2xl justify-between
             p-0` : `p-4 bg-white relative lg:hidden items-center text-2xl justify-between`}>

                {searchVisible ? (
                    <div className='relative p-3' >
                    <div className='w-full flex items-center justify-center gap-3 lg:hidden'>
                        <IoIosArrowBack onClick={toggleSearch} />
                        <input 
                        value={searchFriends}
                        onChange={handleChange}
                         className=' bg-gray-200 rounded-xl w-full text-lg p-1 border-none 
                         block '
                         placeholder='search facebook'
                         type="text" />
                    </div>
                    <div className='absolute left-0 right-0 bg-white shadow-lg 
                    rounded-xl z-50 max-h-[300px] overflow-y-auto p-2 transition-all 
                    duration-200 ease-in-out
                    '>
                     
                      <ul className='pl-8 '>
                      {filteredFriends.map((frnds)=>
                        <li className='text-lg p-0.5 ' key={frnds.id}>{frnds.name} </li>
                     )} 
                      </ul>
                      </div>
                    
                     </div>
                ) :
                    <div className='flex justify-between items-center'>
                        <div><img className='w-[150px]' src={logo} alt="" /></div>
                        <div className='flex gap-3'>
                            <CiSearch onClick={toggleSearch} />
                            <FaFacebookMessenger />
                        </div>
                    </div>
                }

            </nav>

            

            <nav className={!searchVisible ? `overflow-hidden flex justify-between bg-white p-2 items-center 
         ` : `hidden` }>

                <div className='flex items-center gap-3 pl-2'>

         {searchNewVisible  ?
          (
          <IoIosArrowBack  onClick={toggleNewSearch} 
            className='text-3xl rounded-full p-1 hover:bg-gray-100 hidden lg:block'
             />
            ) : (
            <FaFacebook className='text-blue-600 text-3xl hidden lg:block' />
           )  }  
                    
                    <div className='flex'>
                        <CiSearch onClick={toggleNewSearch}  className='text-4xl rounded-tl-xl rounded-bl-xl
                         bg-gray-100 p-2 hidden lg:block' />
                        <input  
                        onChange={handleChange}
                        value={searchFriends}
                        className=' bg-gray-100 rounded-tr-xl rounded-br-xl border-none p-1
                          hidden lg:block'
                            placeholder='search facebook'
                            type="text" />  
                    </div>
                    

                </div>

            
                <div className='flex gap-8 md:gap-20 text-2xl p-2 md:text-3xl  text-gray-500'>
                   
               <Link  
               className= {`pb-1 ${isActive("/HomePosts")  
                ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-500 hover:text-blue-600"
                } `}
                to="/HomePosts">
                <AiFillHome /> 
               </Link>
               
               <Link  
                className={`pb-1 ${isActive("/VideoPosts")  
                    ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-500 hover:text-blue-600"
                    } `}
                to="/VideoPosts"> 
                <MdOutlineOndemandVideo/> 
                 </Link>
               
               <Link 
                className={`pb-1 ${isActive("/ShopPosts")  
                    ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-500 hover:text-blue-600"
                    } `}
                 to="/ShopPosts"> 
                 <CiShop /> 
                  </Link>
               
               <Link 
                className={`pb-1 ${isActive("/GroupPosts")  
                    ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-500 hover:text-blue-600"
                    } `}
                 to="/GroupPosts"><MdGroups /> </Link>
               
               <Link className={`block lg:hidden pb-1 ${isActive("/Notifications")  
                ? "text-blue-600 border-b-4 border-blue-600" 
                : "text-gray-500 hover:text-blue-600"
                } `}
               to="/Notifications"> <IoNotifications /> </Link>
               
               <Link className={`hidden lg:block pb-1 ${isActive("/GamePosts")  
                ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-500 hover:text-blue-600"
                } `}
               to="/GamePosts"><LuGamepad2 /> 
                </Link>
               
               <Link className='items-center bg-gray-300 font-semibold hover:text-blue-600
                      p-1 rounded-full block lg:hidden'
                      to="/Settings">  <MdMenu  /> </Link>
                
                </div>


                <div className='flex gap-5 text-4xl pr-2 items-center '>
                  <Link to="/Settings"> <MdMenu className='bg-gray-300  rounded-full p-1 hidden lg:block' />
                   </Link>
                    <FaFacebookMessenger className='bg-gray-300 rounded-full p-2 hidden lg:block  ' />
                  <Link to="/Notifications">  <IoNotifications className='bg-gray-300 rounded-full p-2 hidden lg:block ' />
                    </Link>
                    <div className=' bg-gray-300 rounded-full hidden lg:block w-[40px] h-[40px] overflow-hidden  '>
                        <img className='w-full h-full object-cover' src={dp} alt="" />
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavBar