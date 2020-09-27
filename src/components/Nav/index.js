import React from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";

function Nav() {
  return (
    <>
      <div className="bar">
        <img className="logo" src={logo} alt="website logo"></img>
        <div className="center-bar">
          <form className="search-bar">
            <input className="search-field"></input>
            <button className="search-button">Search</button>
          </form>
          <div className="catalog">
            <h4>Apparels</h4>
            <h4>Toys</h4>
            <h4>Bags</h4>
            <h4>Bowls</h4>
            <h4>Collars & Harness</h4>
          </div>
        </div>
        <div className="shopper">
          <h6 className="signup">Sign Up</h6>
          <h6 className="login">Log In</h6>
          <img className="cart" src={cart} alt="shopping cart icon"></img>
        </div>
      </div>
    </>
  );
}
export default Nav;
