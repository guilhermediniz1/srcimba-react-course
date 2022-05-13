import React from "react";
import photo from "../images/photo.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={photo} className="info--photo"></img>
      <h1 className="info--name">Guilherme Diniz</h1>
      <h3 className="info--profession">Frontend Developer</h3>
      <div className="buttons">
        <button className="email-button">Email</button>
        <button className="linkedin-button">LinkedIn</button>
      </div>
    </div>
  );
}
