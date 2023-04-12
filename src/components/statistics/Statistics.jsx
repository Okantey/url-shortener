import React from "react";
import "./Statistics.css";
import Shortener from "../shortener/Shortener";
import brand from "../../assets/icon-brand-recognition.svg";
import details from "../../assets/icon-detailed-records.svg";
import custom from "../../assets/icon-fully-customizable.svg";

const Statistics = () => {
  const stats = [
    {
      name: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence  in your content.",
      image: brand,
      id: 1,
    },
    {
      name: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      image: details,
      id: 2,
    },
    {
      name: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      image: custom,
      id: 3,
    },
  ];
  return (
    <section className="statistics">
      <Shortener />
      <div className="stats__prompt">
        <h1>Advanced Statistics</h1>
        <p className="stats__description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <section className="stats__section">
        {stats.map((stat) => {
          return (
            <div key={stat.id} className="stats__box">
              <img src={stat.image} alt={stat.name} />
              <h1 style={{ paddingTop: "2rem" }}>{stat.name}</h1>
              <p>{stat.description}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Statistics;
