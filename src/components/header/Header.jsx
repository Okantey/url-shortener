import React from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <section className="hero">
        <div className="hero__left">
          <h1 className="hero__block">More than just shorter links</h1>
          <p className="hero__description">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button name="Get Started" />
        </div>
        <div className="hero__right"></div>
      </section>
    </header>
  );
};

export default Header;
