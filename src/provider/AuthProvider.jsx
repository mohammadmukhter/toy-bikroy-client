import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useState } from "react";
import app from "../utils/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   register handler function
  const registerHandler = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login handler function
  const loginHandler = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout handler function
  const logOutHandler = () => {
    return signOut(auth);
  };

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
