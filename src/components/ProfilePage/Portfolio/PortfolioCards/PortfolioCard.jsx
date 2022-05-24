import React from "react";

import "./PortfolioCard.css"

const PortfolioCard = (props) => {
  return (
    <div className="portfolio-card-wrapper">
      <div className="card-img">
      <img src={props.image} alt="card-img" />
      </div>
      <div className="card-text">
      <span className="card-heading">
        {props.heading}
      </span>
      <p>{props.info}  </p>
      </div>
    </div>
   
  )
}

export default PortfolioCard