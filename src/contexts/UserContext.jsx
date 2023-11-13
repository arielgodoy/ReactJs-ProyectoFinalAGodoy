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

  // useEffect for any additional logic when the component mounts
//   useEffect(() => {
//     // You can add any initialization logic here
//     // For example, fetching user data from an API
//     // For now, let's set a default user
//     setUser({      
//       nombre: null,
//       correo: null,
//     });
//   }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};


