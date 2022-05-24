import React from "react";
import { Link } from "react-router-dom";
import "./Main_nav.css";

const Main_nav = () => {
  return (
    <div className="main-nav-wrapper">

          <Link  to="/" className="link" >
           Dashboard 
          </Link>
          <Link  to="recordings" className="link" >
            Recordings
          </Link>
          <Link  to="/assignment" className="link" >
            Assignments
          </Link>
          <Link  to="/courseSyllabus" className="link" >
            Course Syllabus
          </Link>

    </div>
  );
};

export default Main_nav;
