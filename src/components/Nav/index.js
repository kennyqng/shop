import React from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";

class Nav extends React.Component {
  state = {
    query: ""
  }
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }
  handleSearch = event => {
    event.preventDefault();

    alert (`searching ${this.state.query}`);
    this.setState({
      query: ""
    });
  };

  render() {
    return (
      <>
        <div className="bar">
          <img className="logo" src={logo} alt="website logo"></img>
          <div className="center-bar">
            <form className="search-bar">
              <input 
              className="search-field" 
              value={this.state.query}
              name="query"
              onChange={this.handleChange}
              type="text"
              placeholder="  search something "
              />
              <button className="search-button" type="submit" value="Submit" onClick={this.handleSearch}>Search</button>
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
}
export default Nav;
