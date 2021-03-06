import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div className="text-center">
    <h1>Point of Sale System</h1>

    <ul className="nav-menu">
      <li className="lead">
        <Link to="/inventory">Inventory</Link>
      </li>
      <li className="lead">
        <Link to="/">CheckOut</Link>
      </li>
      <li className="lead">
        <Link to="/transactions">Transactions</Link>
      </li>
      <li className="lead">
        <Link to="/livecart">LiveCart</Link>
      </li>
    </ul>
  </div>
);

export default Header;
