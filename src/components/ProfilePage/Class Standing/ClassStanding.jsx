import React from 'react'
import "./ClassStanding.css";
import avatar from "../../../images/Avatar.png"
import CardData from './StudentCard/CardData';
import { students } from './Students';
const ClassStanding = () => {
  // const badge_icon = `<i className="fa-solid fa-medal"></i>`

  return (
    <div className='classStanding-wrapper'>
      <div className="heading-wrap">
        <p className='heading'>Class Standing</p>
        <p>You</p>
      </div>
      {/* logged in student card  */}
      <div className="student-cards loggedIn-student-card">
        {/* left side picture and name  */}
        <div className="student">
          <div className="student-img">
            <img src={avatar} alt="avatar" />
          </div>
          <div className='name'>Kamran
            <i className="fa-solid fa-medal"></i>
            <i className="fa-solid fa-medal"></i>
          </div>
        </div>
        {/* right side points and place  */}
        <div className="points">
          <span>points 278</span>
          <span> . </span>
          <span>place 6th</span>
        </div>
      </div>

      {/* other students cards  */}
      <div className="student-card-wrappper">
        {/* <CardData/> */}
        {students.map((item) => {
          return (
            <CardData
              image={item.img}
              Name={item.name}
              icon = {item.icon} 
              icon1 = {item.icon1}
              Points={item.points}
              Place={item.place}
            />
          )

        })}
      </div>
    </div>
  )
}

export default ClassStanding