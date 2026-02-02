
import { useContext, createContext, useEffect, useState } from "react";


// create context
const AuthContext = createContext(null);

// coustom hook
export const useAuth = () => useContext(AuthContext);

// crreate provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    // all data stored in local storage for auth persistence
}

return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );