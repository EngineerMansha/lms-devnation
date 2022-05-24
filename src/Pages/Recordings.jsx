import React from "react";
import Table from "../components/Recordings/Table";
import "./recordings.css"
const Recordings = () => {
  return (
    <div className="rec-wrapper">
       <h4>LECTURE RECORDINGS</h4>
      <p>You will get access to the recordings after each class. All recordings will be listed here.</p>
      <Table />
    </div>
  );
};

export default Recordings;
