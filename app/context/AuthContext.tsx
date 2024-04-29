// AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface AuthContextType  {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<boolean>;
}

const initialAuthContextValue: AuthContextType = {
  isLoggedIn: false,
  setIsLoggedIn: () => {}
};

const AuthContext = createContext(initialAuthContextValue);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
