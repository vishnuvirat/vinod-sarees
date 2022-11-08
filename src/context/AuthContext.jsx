import { useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ childern }) => {
  return <AuthContext.Provider value={{}}>{childern}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
