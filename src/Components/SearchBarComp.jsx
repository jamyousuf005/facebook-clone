import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
 
const SearchBarComp = () => {
     
    const {filteredFriends} = useContext(DataContext)
    const [isVisible,setIsVisible] = useState(false)

    useEffect(() => {
      setIsVisible(true)
    }, [])
    
  return (

    <div className={`absolute w-[290px] bg-white hidden lg:block p-4 shadow-lg 
        transition-all duration-200 ease-in-out z-50
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >

        <div className=''>  
             
                <div className=''>
                    <ul className='pl-15  flex flex-col gap-1'>
                    {filteredFriends.map((frens)=>
                      <li key={frens.id} >{frens.name} </li>
                    )}
                   </ul>
                </div>
             
       
       
        </div>
    </div>
  )
}

export default SearchBarComp