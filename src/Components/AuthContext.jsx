import { useState, useEffect, createContext } from "react";
import { auth, db } from './Firebase';
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Function to fetch user data from Firestore
  const fetchUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        setUserDetails(userDoc.data());
      } else {
        console.log("No user details found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

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
      
      // If there's a user, fetch their details
      if (currentUser) {
        fetchUserData(currentUser.uid);
      } else {
        setUserDetails(null);
      }
      
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      setLoading(true);
      await auth.signOut();
      setUserDetails(null);
      navigate('/Login');
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userDetails, logout, loading, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  );
};