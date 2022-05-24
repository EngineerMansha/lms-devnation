import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainnav from "../Mainnav/Mainnav";
import "./Main.css";
import Dashboard from "../../Pages/Dashboard";
import Assignment from "../../Pages/Assignment";
import CourseSyllabus from "../../Pages/CourseSyllabus";
import Recordings from "../../Pages/Recordings";

const Main = () => {
  return (
    <div>
    <div className="nav-bg-blr">
      <div className="heading">
       <div className="para"> <p>8 Weeks Flutter Program with Usama Server</p> </div>
      </div>
      </div>
    <div className="main-wrapper">
      <Mainnav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="recordings" element={<Recordings />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="courseSyllabus" element={<CourseSyllabus />} />
      </Routes>
    </div>
    </div>
  );
};

export default Main;
