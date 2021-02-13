import React, { useEffect, useState, useContext, createContext } from 'react';
import { auth } from '../firebase/config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentuser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setCurrentuser(user);
      setLoading(false);
    });
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
