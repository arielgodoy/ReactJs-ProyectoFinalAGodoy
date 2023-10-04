import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";

const AddToCartButton = () => {
  const { cantidadTotal, setCantidadTotal } = useContext(CartContext);

  const aumentarCantidadTotal = () => {
    // Aquí puedes implementar la lógica para aumentar la cantidad total del carrito.
    // Por ejemplo, puedes aumentarla en 1 cada vez que se hace clic en este botón.
    setCantidadTotal(cantidadTotal + 1);
  };

  return (
    <button className="btn btn-primary" onClick={aumentarCantidadTotal}>
      Añadir al carrito ({cantidadTotal})
    </button>
  );
};

export default AddToCartButton;
