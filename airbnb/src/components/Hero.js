import React from "react";
import photoGrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero-content">
      <img src={photoGrid} className="photo-grid"></img>
      <div className="hero--texts">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by<br/>one-of-a-kind hosts—all
          without leaving<br/>home.
        </p>
      </div>
    </div>
  );
}
