
import React from "react";
import './flowersCard.css'

const FlowerCard = props => (
  <div className="card">
    <div className="img-container">
      <a
        onClick={() => props.selectedFlower(props.breed)}
        className={props.curScore === 0}
      >
        <img alt={props.breed} src={props.image} />
      </a>
    </div>
  </div>
);

export default FlowerCard;