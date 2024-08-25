import React, { useContext } from "react";
import "./cartItems.css"
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
    const {all_product, CartItems,removeFromCart} =useContext(ShopContext)
    return ( 
        <div className="cartItems"></div>
     );
}
 
export default CartItems;