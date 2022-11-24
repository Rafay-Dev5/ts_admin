import React, { createContext, useContext } from "react";

interface authChildrenInterface {
  children: any;
}
const AuthContext = createContext<authChildrenInterface | null>(null);
export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: any }) => {
  return (
    <AuthContext.Provider value={{ children }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
