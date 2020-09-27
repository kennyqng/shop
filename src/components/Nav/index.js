import React from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";

function Nav() {
  return (
    <>
      <div className="bar">
        <img className="logo" src={logo}></img>
        <div className="center-bar">
          <form className="search-bar">
            <input className="search-field"></input>
            <button className="search-button">Search</button>
          </form>
          <div className="catalog">
            <h4>Apparels</h4>
            <h4>Toys</h4>
            <h4>Bags</h4>
            <h4>Collars & Harness</h4>
            <h4>Bowls</h4>
          </div>
        </div>
        <div className="shopper">
          <h5 className="login">Sign Up|Log In</h5>
          <img className="cart" src={cart}></img>
        </div>
      </div>
    </>
  );
}
export default Nav;
