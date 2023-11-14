import React, { useContext, useState } from "react";

import { UserContext } from "../contexts/UserContext";

const SetUserModal = ({ isOpen, onClose }) => {  
  const { updateUser } = useContext(UserContext);
  
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  
  const handleSubmit = () => {    
    updateUser(nombre, correo);
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
      <button onClick={handleSubmit}>Continuar....</button>
    </div>
  );
};

export default SetUserModal;
