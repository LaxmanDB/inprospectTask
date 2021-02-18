import React, { useState, useContext } from "react";
import decode from "jwt-decode";

const AuthContext = React.createContext();

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  function login(token) {
    const decoded = decode(token);
 
    setUser(decoded);
  }

  return { user, login};
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}