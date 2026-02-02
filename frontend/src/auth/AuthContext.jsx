import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

// create provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // auth stateee

  // all data stored in local storage for auth persistencee
  // useEffect(()=>{
  //   const authUser = JSON.parse(localStorage.getItem("user"))
  // })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
