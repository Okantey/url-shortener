import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="section__left">
        <div className="logo__container">
          <img src={logo} alt="shortly" />
        </div>
        <ul className="links__container">
          <li className="link__item">
            <a href="#Features">Features</a>{" "}
          </li>
          <li className="link__item">
            <a href="#Pricing">Pricing</a>{" "}
          </li>
          <li className="link__item">
            <a href="#Resources">Resources</a>{" "}
          </li>
        </ul>
      </div>
      <div className="section__right">
        <a href="#login" className="link__item">
          Login
        </a>
        <Button name="Signup" />
      </div>
    </nav>
  );
};

export default Navbar;
