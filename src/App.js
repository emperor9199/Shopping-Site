import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsContextProvider from "./global/ProductsContext";
import CartContextProvider from "./global/CartContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
