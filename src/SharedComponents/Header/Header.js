import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import "./Header.css";
import NavLink from "./NavLink/NavLink";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand logo" href="index.html">
                  iPower <img src={Logo} alt={"Logo"}></img>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <NavLink></NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
