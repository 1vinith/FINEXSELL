import React from "react";
import { Link } from "react-router-dom"
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="--welcome-header">
        <h2>Welcome To</h2>
        <h1>FinexSell</h1>
      </div>
      <Link to="getStarted"><button className="--welcome-btn">Get Started</button></Link>
    </div>
  );
};

export default Welcome;
