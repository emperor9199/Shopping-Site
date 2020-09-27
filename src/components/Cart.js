import React, { useContext } from "react";
import { CartContext } from "../global/CartContext";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = (props) => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);

  const handleToken = async (token) => {
    const product = { name: "All Products", price: totalPrice };
    const response = await axios.post("http://localhost:3001/checkout", {
      product,
      token,
    });
    const { status } = response.data;
    if (status === "success") {
      dispatch({ type: "EMPTY" });
      props.history.push("/");
      toast.success("Purchased Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

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
      {shoppingCart.length > 0 ? (
        <div className="cart-summary">
          <div className="summary">
            <h3>Cart Summary</h3>
            <div className="total-items">
              <div className="items">Total Items</div>
              <div className="items-count">{qty}</div>
            </div>
            <div className="total-price-section">
              <div className="price-title">Total Price</div>
              <div className="items-price">{totalPrice}</div>
            </div>
            <div className="stripe-section">
              <StripeCheckout
                stripeKey="pk_test_51HVfwqDg3IaavaVbwqtwSZwam9BBGxKir23txpJluoDkTNgj7F57MgQp6Vdb5Lutu8GC3UXMVdoIzFoOWJZZScYP00F33z4ZAH"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
              ></StripeCheckout>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
