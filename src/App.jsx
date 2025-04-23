import React from 'react';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Components/AuthContext';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';
import HomePosts from './Sections/HomePosts';
import VideoPosts from './Sections/VideoPosts';
import ShopPosts from './Sections/ShopPosts';
import GroupPosts from './Sections/GroupPosts';
import GamePosts from './Sections/GamePosts';
import Notifications from './Sections/Notifications';
import Settings from './Sections/Settings';
import RegisterCard from './Components/RegisterCard';
import { ToastContainer } from 'react-toastify';

// Optional loading component
const LoadingScreen = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const App = () => {
  const { user, loading } = useContext(AuthContext);

  // Show loading screen while authentication state is being determined
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/HomePosts" /> : <Navigate to="/Login" />} />
        <Route path="/Login" element={user ? <Navigate to="/HomePosts" /> : <Login />} />
        <Route path="/RegisterCard" element={user ? <Navigate to="/HomePosts" /> : <RegisterCard />} />

        <Route path="/HomePosts" element={
          user ? (
            <>
              <NavBar />
              <HomePosts />
            </>
          ) : <Navigate to="/Login" />
        } />

        {/* Other routes remain unchanged */}
        <Route path="/VideoPosts" element={
          user ? (
            <>
              <NavBar />
              <VideoPosts />
            </>
          ) : <Navigate to="/Login" />
        } />

        <Route path="/ShopPosts" element={
          user ? (
            <>
              <NavBar />
              <ShopPosts />
            </>
          ) : <Navigate to="/Login" />
        } />

        <Route path="/GroupPosts" element={
          user ? (
            <>
              <NavBar />
              <GroupPosts />
            </>
          ) : <Navigate to="/Login" />
        } />

        <Route path="/GamePosts" element={
          user ? (
            <>
              <NavBar />
              <GamePosts />
            </>
          ) : <Navigate to="/Login" />
        } />

        <Route path="/Notifications" element={
          user ? (
            <>
              <NavBar />
              <Notifications />
            </>
          ) : <Navigate to="/Login" />
        } />

        <Route path="/Settings" element={
          user ? (
            <>
              <NavBar />
              <Settings />
            </>
          ) : <Navigate to="/Login" />
        } />

        <Route path="*" element={<Navigate to="/Login" />} />
      </Routes>
    </>
  );
};

export default App;