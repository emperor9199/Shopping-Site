import React, { useContext } from "react";
import { CartContext } from "../global/CartContext";

const Cart = () => {
  const data = useContext(CartContext);
  console.log(data);

  return (
    <div className="container">
      <div className="cart-container">
        <h1>Cart Screen</h1>
      </div>
    </div>
  );
};

export default Cart;
