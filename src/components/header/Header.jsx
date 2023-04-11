import React from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import Button from "../button/Button";
import hero from "../../assets/illustration-working.svg";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <section className="hero">
        <div className="hero__left">
          <h1 className="hero__block">More than just shorter links</h1>
          <p
            style={{ color: "var(--Grayish-Violet)", width: "80%" }}
            className="hero__description"
          >
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button name="Get Started" />
        </div>
        <div className="hero__right">
          <img src={hero} alt="hero__image" />
        </div>
      </section>
    </header>
  );
};

export default Header;
