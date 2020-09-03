import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out these our Services!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/under.jpg"
              text="Check your tire now!"
              label="motorcycle-tire"
            />
            <CardItem
              src="images/under.jpg"
              text="Check your tire now!"
              label="motorcycle-tire"
            />
            <CardItem
              src="images/under.jpg"
              text="Check your tire now!"
              label="motorcycle-tire"
            />
            <CardItem
              src="images/under.jpg"
              text="Check your tire now!"
              label="motorcycle-tire"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
