import React from 'react'
import Login from './Pages/Login'
import {  createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import { useContext } from 'react'
import { AuthContext } from './Components/AuthContext'
import NavBar from './Components/NavBar'
import HomePosts from './Sections/HomePosts'
import VideoPosts from './Sections/VideoPosts'
import ShopPosts from './Sections/ShopPosts'
import GroupPosts from './Sections/GroupPosts'
import GamePosts from './Sections/GamePosts'
import Notifications from './Sections/Notifications'
import Settings from './Sections/Settings'


const App = () => {

  const { user } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: '/', // Root path
      element: user ? <Navigate to="/HomePosts" /> : <Login />, // Redirect to Home if logged in, else show Login
    },
    {
      path: '/Login', // Explicit Login route
      element: <Login />,
    },

    {
           path:'/HomePosts',
           element: <> <NavBar/> <HomePosts/> </>
    },
    {
           path : '/VideoPosts',
           element: <> <NavBar/> <VideoPosts/> </>
    },
    {
      path : '/ShopPosts',
      element: <> <NavBar/> <ShopPosts/> </>
    },
    {
      path : '/GroupPosts',
      element: <> <NavBar/> <GroupPosts/> </>
    }
    ,
    {
      path : '/GamePosts',
      element: <> <NavBar/> <GamePosts/> </>
    },
    {
      path : '/Notifications',
      element: <> <NavBar/> <Notifications/> </>
    },

    {
      path : '/Settings',
      element: <> <NavBar/> <Settings/> </>
    },

    ,{
      path: '/HomePosts',
      element: user ? (
        <>
           <HomePosts />
        </>
      ) : (
        <Navigate to="/Login" />
      ),
    },
    {
      path: '*',
      element: <Navigate to="/Login" />,
    },
  ])

  return ( 
        <RouterProvider router={router} />
  )
}

export default App