import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductsContextProvider from "./global/ProductsContextProvider";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProductsContextProvider>
        <div className="container">
          <Products />
        </div>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
