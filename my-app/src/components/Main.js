import React from "react";
import logoBg from "../images/reactjs-icon 2.png"

export default function Main() {
  return (
    <div className="main-content">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img src={logoBg} className="logo-bg"></img>
    </div>
  );
}
