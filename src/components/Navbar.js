import React, { Component } from "react";
import { FaAlignRight, FaWhatsapp, FaRegPaperPlane } from "react-icons/fa";
import "../App.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  // state is default value for navbar mobile view
  //if you press mobileNavBar its open ore close card
  state = {
    isOpen: false,
  };
  mobileNavBar = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-heder">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.mobileNavBar}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links nav-links-p-close"}
          >
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms/">
                Rooms
              </Link>
            </li>
            <li className="nav-links-p">
              <p><FaRegPaperPlane/> info@beachresort.com  &nbsp; <FaWhatsapp/> +37127150201</p>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
