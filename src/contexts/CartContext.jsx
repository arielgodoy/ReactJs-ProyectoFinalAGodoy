import { createContext,useState } from "react"

const CartContext = createContext();

export const CartProvider =({children})=>{
    const [cantidadTotal, setCantidadTotal] = useState(0);

    return(
        <CartContext.Provider value={{cantidadTotal,setCantidadTotal}}>       
        {children}
        </CartContext.Provider>
    );
}
export default CartContext;
