import React from 'react'
import "./Assignment.css"
const Assignment = () => {
  return (
    <div className="assign-wrapper">
      <h4>YOUR ASSIGNMENTS & PROJECTS</h4>
      <p>These projects are designed to make you a solid developer. Make sure to complete them all on time!</p>
      <div className="project-box">
      <i class="fa-solid fa-folder-plus"></i>
        <p>You have no Assignments 😭</p>
      </div>
    </div>
  )
}

export default Assignment