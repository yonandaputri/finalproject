import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <h1>SERVICE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="landing-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          FINDING SOMETHING'S NEW
        </Button>
      </div>
    </div>
  );
}

export default Landing;
