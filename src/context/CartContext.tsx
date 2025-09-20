import { createContext, useState } from "react";

const CartContext=createContext(null)
const initialValue=[]
const CartProvider=({children})=>{
    const [cart, setCart] = useState(initialValue);
    const data={cart,setCart}
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider}
export default CartContext