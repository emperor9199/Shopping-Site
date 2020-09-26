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
                <span
                  className="cart-product-plus"
                  onClick={() =>
                    dispatch({ type: "ADD_PRODUCT", id: cart.id, cart })
                  }
                >
                  <i class="fas fa-plus"></i>
                </span>
                <span className="cart-product-qty">{cart.qty}</span>
                <span
                  className="cart-product-minus"
                  onClick={() =>
                    dispatch({ type: "REMOVE_PRODUCT", id: cart.id, cart })
                  }
                >
                  <i class="fas fa-minus"></i>
                </span>
                <span className="cart-product-total-price">
                  {cart.price * cart.qty}
                </span>
                <span
                  className="cart-product-delete"
                  onClick={() =>
                    dispatch({ type: "DELETE_PRODUCT", id: cart.id, cart })
                  }
                >
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
