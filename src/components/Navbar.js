import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="left">
        <li>
          <a href="www.google.com">Shoplace</a>
        </li>
      </ul>

      <ul className="right">
        <li>
          <a href="www.google.com">
            <span className="shoppingCart">
              <i class="fas fa-shopping-cart"></i>
              <span className="cartCount">0</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
