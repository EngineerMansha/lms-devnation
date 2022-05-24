import React from 'react'
import "./CardData.css";
const CardData = (props) => {
    return (
        <div className="student-cards">
            {/* left side picture and name  */}
            <div className="student">
                <div className="student-img">
                <img src={props.image} alt="avatar" />
                </div>
                <div className='name'>{props.Name}
                <span>{props.icon}</span>
                <span>{props.icon1}</span>
                </div>
            </div>
            {/* right side points and place  */}
            <div className="points">
                <span>points {props.Points}</span>
                <span> . </span>
                <span>place {props.Place}</span>
            </div>
        </div>
    )
}

export default CardData