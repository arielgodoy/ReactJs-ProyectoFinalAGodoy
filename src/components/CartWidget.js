import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";


const CartWidget = () => {
  // Utiliza useContext para obtener la cantidadTotal desde el contexto
  const { cantidadTotal } = useContext(CartContext);

  return (
    
    <div>
      <span className="fa-stack">
        <i className="fa fa-shopping-cart fa-stack-2x"></i>
        <span className="fa-stack-2x cart-badge">___{cantidadTotal}</span>
      </span>
    </div>
    
  );
};

export default CartWidget;
