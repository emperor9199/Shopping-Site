import React, { useContext } from "react";
import { ProductsContext } from "../global/ProductsContextProvider";

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
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

          <div className="buy-btn">Buy Now</div>

          {product.status === "hot" ? <div className="hot">Hot</div> : ""}
          {product.status === "new" ? <div className="new">New</div> : ""}
        </div>
      ))}
    </div>
  );
};

export default Products;
