import React from "react";
import logo from "../images/logo.png";

export default function Main() {
  return (
    <nav>
      <span>
        <img src={logo} className="logo"></img>
        <h3>ReactFacts</h3>
      </span>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
