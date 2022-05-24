import React from "react";
import "./Card.css";
import calendar from "../../images/calendar.png";
const Card = (props) => {

  return (
    <div className="card">
      <div className="date-time">
        <img src={calendar} alt="calander" />
        <p>
          {props.date} @ {props.startTime} {props.timeZone}
        </p>
      </div>
      <div className="card-data">
        <h4>{props.title}</h4>
        <p>Duration: {props.durationInHours}:00 Hours</p>
        <p>Instructor: {props.p1}</p>
        <span className="name"> {props.p2}<span>({props.instructorRole})</span> </span>
        <p className="google"> {props.p3}</p>
        <span className="upcoming"> <a href={props.p4}>Join Live Class <i class="fa-solid fa-arrow-right-long"></i></a> </span>
      </div>
    </div>
  );
};

export default Card;
