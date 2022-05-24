import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import ProgressBar from "../components/Progressbar/ProgressBar";
import Stats from "../components/Stats/Stats";
import "./Dashboard.css";
import axios from "axios";
const Dashboard = () => {
  const url =
    "http://localhost:5001/fir-rest-api-9b588/us-central1/app/api/get/dashboard";

  const [Data, setData] = useState(null);
  let cardContent = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  if (Data) {
    cardContent = (
      <div className="card-wrapper">
        {Data.map((item) => {
          return (
            <Card
              key={item.courseId}
              date={item.startDate}
              startTime={item.startTime}
              timeZone={item.timezone}
              title={item.meetingLabel}
              durationInHours={item.durationInHours}
              instructorRole={item.instructorRole}
              p1={item.instructorCompany}
              p2={item.instructorName}
              p3={item.InstructorCertification}
              p4={item.meetingLink}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper">
      <div className="cards-div">
        <h4>YOUR LIVE LECTURES</h4>
        {/* card wrapper  */}
        {cardContent}
      </div>
      {/* Progres bar  */}
      <div className="prog-div">
        <h4 className="prog-heading">YOUR PROGRESS</h4>
        <ProgressBar bgcolor="#6366F1" progress="48" height={10} />
      </div>
      {/* stats  */}
      <div className="stats-div">
        <h4 className="stats">YOUR STATS</h4>
        <Stats />
      </div>
    </div>
  );
};

export default Dashboard;
