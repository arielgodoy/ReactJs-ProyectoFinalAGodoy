import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {  
  const { precioTotal } = useContext(CartContext );
  const { cantidadEnCarrito } = useContext(CartContext);
  
  return (    
    <>
      <i class="fa-solid fa-cart-shopping"></i>        
      <span>{cantidadEnCarrito()} US${precioTotal()}</span>
      
    </>    
  );
};

export default CartWidget;
