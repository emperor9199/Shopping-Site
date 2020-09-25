import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsContextProvider from "./global/ProductsContextProvider";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" exact component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
