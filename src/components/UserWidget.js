import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const UserWidget = () => {
  const { usuario, email } = useContext(UserContext);

  return (
    <>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>{usuario}: {email}</span>
    </>
  );
};

export default UserWidget;
