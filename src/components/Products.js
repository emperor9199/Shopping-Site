import React, { useContext } from "react";
import { ProductsContext } from "../global/ProductsContext";
import Banner from "./Banner";
import { CartContext } from "../global/CartContext";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div className="container">
      <Banner />
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-img">
              <img src={product.image} alt="Not Loaded" />
            </div>

            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <div className="product-price">Rs.{product.price}</div>
            </div>

            <div
              className="buy-btn"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", id: product.id, product })
              }
            >
              Buy Now
            </div>

            {product.status === "hot" ? <div className="hot">Hot</div> : ""}
            {product.status === "new" ? <div className="new">New</div> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
