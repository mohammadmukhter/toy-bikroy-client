import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../utils/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   register handler function
  const registerHandler = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login handler function
  const loginHandler = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout handler function
  const logOutHandler = () => {
    setLoading(true);
    return signOut(auth);
  };

  //  onAuthStateChange function// uer login or logout observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    registerHandler,
    loginHandler,
    logOutHandler,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
