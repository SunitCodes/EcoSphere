import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Fetch from API/localStorage after login
  const [userRole, setUserRole] = useState("student"); // or "teacher"

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook for easy access
export const useAuth = () => useContext(AuthContext);
