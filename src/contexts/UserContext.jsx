import React, { createContext, useState } from "react";

// Create a context

export const UserContext = createContext();

// Create a context provider
export const UserProvider = ({ children }) => {
  // State to store user information
  const [user, setUser] = useState({
    nombre: null,
    correo: null,
  });

  // Function to update user information
  const updateUser = (nombre, correo) => {
    setUser({ nombre, correo });
  };

  

  // Function to get user's name
  const usuario = () => {
    return user.nombre;
  };

  // Function to get user's email
  const email = () => {
    return user.correo;
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
