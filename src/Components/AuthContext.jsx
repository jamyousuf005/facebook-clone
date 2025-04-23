import { useState, useEffect, createContext } from "react";
import { auth } from './Firebase';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      // Check if user just signed up
      const justSignedUp = localStorage.getItem("justSignedUp") === "true";
      
      if (justSignedUp && currentUser) {
        // If user just signed up, we should ignore this authentication temporarily
        // The user will be signed out properly in the signup component
        return;
      }
      
      setUser(currentUser);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      setLoading(true); // Set loading to true during logout
      await auth.signOut();
      navigate('/Login');
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};