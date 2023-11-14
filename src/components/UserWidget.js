import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const UserWidget = () => {
  const { usuario, email } = useContext(UserContext);

  return (
    <>
      <i className="fa-solid fa-cart-shopping"></i>
      {usuario() ? (
        <span>
          Usuario: {usuario()} Email: {email()}{" "}
          <a href="/ver-pedidos">Ver pedidos</a>
        </span>
      ) : null}
    </>
  );
};

export default UserWidget;
