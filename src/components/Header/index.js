// src/components/Header/index.js
import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom'


class Header extends React.Component {
  render() {
    return (
      <nav bg="light" className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <Link to="/" className="Nav-brand-logo">
              {/* <Link to="/users/1" className="Nav-brand-logo">
            <NavbarBrand href="/">Home</NavbarBrand> */}
              Instagram
              </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;