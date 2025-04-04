import { useMemo } from "react";
import { createContext, useState } from "react";
import post1 from "../../Assets/Posts/post1.jpg";
import post2 from "../../Assets/Posts/post2.jpg";
import post3 from "../../Assets/Posts/post3.jpg";
import post4 from "../../Assets/Posts/post4.jpg";
import post5 from "../../Assets/Posts/post5.jpg";
import post6 from "../../Assets/Posts/post6.jpg";
import post7 from "../../Assets/Posts/post7.jpg";
import post8 from "../../Assets/Posts/post8.jpg";



export const DataContext = createContext()

export const DataProvider=({children})=>{

const [friendsList]=useState([
    {id:'1',name:'Ameen' , img : post1 },
    {id:'2',name:'Ikram' , img : post2 },
    {id:'3',name:'Uzair' , img : post3 },
    {id:'4',name:'Gazanfar', img : post4  },
    {id:'5',name:'Ali Muhammad', img : post5  },
    {id:'6',name:'Virat Kohli',img : post6  },
    {id:'7',name:'Grace',img : post7  },
    {id:'8',name:'Harry',img : post8  }
])

const stories = [
  { id: 1, name: "Ameen", img: "../../Assets/ameen.jpeg" },
  { id: 2, name: "Virat Kohli", img: "../../Assets/kohli.jpg" },
  { id: 3, name: "Uzair", img: "../../Assets/uzair.avif" },
  { id: 4, name: "Ikram", img: "../../Assets/ikram.jpg" },
  { id: 5, name: "Ali Muhammad", img: "../../Assets/ali muhammad.avif" },
  { id: 6, name: "Gazanfar", img: "../../Assets/Gazanfar.jpg" },
  { id: 7, name: "Grace", img: "../../Assets/Posts/2ndlast.jpg" },
  { id: 8, name: "Harry", img: "../../Assets/Posts/last.webp" },
];


const [searchFriends,setSearchFriends]=useState('')

const handleChange=(e)=>{
     e.preventDefault()
     setSearchFriends(e.target.value)
}


const filteredFriends= useMemo(()=>{
    return friendsList.filter((friend)=>
     friend.name.toLowerCase().includes(searchFriends.toLowerCase()))

},[searchFriends])

 const [searchNewVisible, setSearchNewVisible] = useState(false)
        
         const toggleNewSearch = () => {
             setSearchNewVisible(!searchNewVisible)
            }


return(
    <DataContext.Provider value={{searchFriends,handleChange,friendsList,filteredFriends,
    searchNewVisible,toggleNewSearch,stories}} >
     {children}
 </DataContext.Provider>
 )

}

