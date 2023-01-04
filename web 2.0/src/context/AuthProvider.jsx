import { createContext, useState } from "react";

// Roles: regular, verified, super-admin
export const AuthContext = createContext({
  loggedIn: false,
  userId: null,
  role: null,
});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loggedIn: false,
    userId: "",
    role: "",
  });

  const login = (userId, role) => {
    setAuth((prevState) => ({
      ...prevState,
      loggedIn: true,
      userId,
      role,
    }));
  };

  const logout = () => {
    setAuth((prevState) => ({
      ...prevState,
      loggedIn: false,
      userId: "",
      role: "",
    }));
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;