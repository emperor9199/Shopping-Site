import React, { createContext, useState } from "react";
import dslr from "../assests/dslr.jpg";
import headphone from "../assests/headphone.jpg";
import iphone from "../assests/iphone.jpg";
import mic from "../assests/mic.jpg";
import perfume from "../assests/perfume.jpg";
import ring from "../assests/ring.jpg";
import shoe from "../assests/shoe.jpg";
import watch from "../assests/watch.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "DSLR", price: 2, image: dslr, status: "hot" },
    { id: 2, name: "Headphone", price: 1, image: headphone, status: "new" },
    { id: 3, name: "Iphone", price: 2, image: iphone, status: "hot" },
    { id: 4, name: "Microphone", price: 1, image: mic, status: "new" },
    { id: 5, name: "Perfume", price: 1, image: perfume, status: "hot" },
    { id: 6, name: "Ring", price: 2, image: ring, status: "new" },
    { id: 7, name: "Shoes", price: 1, image: shoe, status: "hot" },
    { id: 8, name: "Watch", price: 0, image: watch, status: "new" },
  ]);

  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
