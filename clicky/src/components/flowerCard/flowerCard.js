
import React from "react";
import './flowersCard.css'

const FlowerCard = props => (
  <div className="card">
    <div className="img-container">
      <a
        onClick={() => props.selectedFlower(props.name)}
        className={props.count === 0}
      >
        <img alt={props.name} src={props.image} />
      </a>
    </div>
  </div>
);

export default FlowerCard;