import React from "react";
import { Link } from "react-router-dom";


function NavBar () {
  return (
    <div className="navbar">
        <h1>
          <Link to='/' className="title">Grocery Helper</Link>
        </h1>
        <div className="links">
          <h3>
            <Link to="/Groceries">Groceries</Link>
          </h3>
          <h3>
            <Link to="/TemplateLists">Template Lists</Link>
          </h3>
        </div>
    </div>
  );
}

export default NavBar;