import React, { Component } from "react";
import { connect } from "react-redux";

import "./MainNavigation.css";
import history from "../../../../history";
import { Link } from "react-router-dom";

class MainNavigation extends Component {
  onRouteChanged = (url) => {
    window.scrollTo(0, 0);
    history.push(url);
  };

  render() {
    const stylee = {
      color: "black",
      paddingRight: "15px",
      fontWeight: "bold",
    };
    return (
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <Link to="/">TEA SHOP</Link>
              </div>

              <nav className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <Link style={stylee} to="/">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link style={stylee} to="/categories">
                      PRODUCTS
                    </Link>
                  </li>
                  <li>
                    <Link style={stylee} to="/BLOG">
                      BLOG
                    </Link>
                  </li>
                  <li>
                    <Link style={stylee} to="/Contact">
                      CONTACT
                    </Link>
                  </li>
                </ul>
                <ul className="navbar_user">
                  <li className="checkout">
                    <Link style={stylee} to="/cart">
                      <i
                        className="fa fa-shopping-cart "
                        aria-hidden="true"
                      ></i>
                      <span className="checkout_items">
                        {this.props.cartTotal}
                      </span>
                    </Link>
                  </li>
                </ul>
                <div className="hamburger_container">
                  <i className="fa fa-bars" aria-hidden="true" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartTotal: state.cart.total,
});

export default connect(mapStateToProps)(MainNavigation);
