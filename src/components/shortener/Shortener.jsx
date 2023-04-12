import React from "react";
import "./Shortener.css";

const Shortener = () => {
  return (
    <section className="shortener">
      <div className="shortener__box">
        <input type="text" placeholder="Shorten a link here.." />
        <button role="submit">Shorten It!</button>
      </div>
    </section>
  );
};

export default Shortener;
