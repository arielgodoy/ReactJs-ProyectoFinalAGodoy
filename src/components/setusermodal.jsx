import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";



const SetUserModal = ({ isOpen, onClose }) => {
  // State to hold the input values  
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  // Access the context to get the updateUser function
  const { updateUser } = useContext(UserContext);

  // Function to handle form submission
  const handleSubmit = () => {
    // Update the user information using the context function
    updateUser(nombre, correo);
    // Close the modal
    onClose();
  };

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>      
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label>Correo:</label>
        <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Guardar</button>
    </div>
  );
};

export default SetUserModal;
