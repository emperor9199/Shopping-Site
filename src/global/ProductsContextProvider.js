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
    { id: 1, name: "DSLR", price: 25000, image: dslr, status: "hot" },
    { id: 2, name: "Headphone", price: 5000, image: headphone, status: "new" },
    { id: 3, name: "Iphone", price: 95000, image: iphone, status: "hot" },
    { id: 4, name: "Microphone", price: 2000, image: mic, status: "new" },
    { id: 5, name: "Perfume", price: 1000, image: perfume, status: "hot" },
    { id: 6, name: "Ring", price: 55000, image: ring, status: "new" },
    { id: 7, name: "Shoes", price: 3000, image: shoe, status: "hot" },
    { id: 8, name: "Watch", price: 35000, image: watch, status: "new" },
  ]);

  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
