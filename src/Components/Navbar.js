import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Styles/Button";
import NavWrapper from "./Styles/NavWrapper";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar bg-info navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <h4 className="navbar-brand">Mobile</h4>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/">Product</Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Button>
            <i className="fas fa-cart-plus" /> My cart
          </Button>
        </Link>
      </NavWrapper>
    );
  }
}
