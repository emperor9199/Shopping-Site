import React, { useContext } from "react";
import { CartContext } from "../global/CartContext";

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-details">
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cart-product-img">
                  <img src={cart.image} alt="Not Loaded" />
                </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">Rs.{cart.price}</span>
                <span className="cart-product-plus">
                  <i class="fas fa-plus"></i>
                </span>
                <span className="cart-product-qty">{cart.qty}</span>
                <span className="cart-product-minus">
                  <i class="fas fa-minus"></i>
                </span>
                <span className="cart-product-total-price">{cart.price}</span>
                <span className="cart-product-delete">
                  <i class="fas fa-trash-alt"></i>
                </span>
              </div>
            ))
          : "Sorry! You haven't added any items yet"}
      </div>
    </div>
  );
};

export default Cart;
