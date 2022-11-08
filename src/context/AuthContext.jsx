import { useContext, createContext } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../components/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ childern }) => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <AuthContext.Provider value={{ googleSignIn }}>
      {childern}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
