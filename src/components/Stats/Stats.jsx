import React from 'react'
import "./Stats.css"
const Stats = () => {
  return (
    <div className="stats-wrapper">
        <div className="stat-icon">
        <i className="fa-solid fa-address-book"></i>
        </div>
        <div className="stat-data">
            <p>Your Attendance</p>
            <p><span>0</span> out of 16</p>
        </div>
    </div>
  )
}

export default Stats