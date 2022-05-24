import React from "react";
import "./ProfilePage.css";
import avatar from "../../images/profile.png";
import ClassStanding from "./Class Standing/ClassStanding";
import Chart from "./Chart/Chart";
import Portfolio from "./Portfolio/Portfolio";
import bulb from "../../images/bulb.png";
// import NewSlider from '../testingComponent/NewSlider';

const ProfilePage = () => {
  return (
    <div className="profile-page-wrapper">
      {/* nav overlap */}
      <div className="overlap">
        <p>Your Profile</p>
      </div>

      {/* profile wrapper */}
      <div className="rectangle-474">
        <div className="profile-name-img-contact-wrapper">
          {/* left side profile info  */}
          <div className="profile-info">
            <div className="image">
              <img src={avatar} alt="" />
              <i class="fa-solid fa-pen"></i>
            </div>
            <div className="profile-intro">
              <span className="name">Tom Cook</span>
              <span className="job">.Net engineer at PFA</span>
              <span className="location">Lahore District, Punjab Pakistan</span>
              <a href="#" className="email">
                tomcook@gmail.com
              </a>
            </div>
          </div>

          {/* right side share and save buttons  */}
          <div className="buttons-wrapper">
            {/* share profile button  */}
            <div className="button">
              <i className="fa-solid fa-share"></i>
              <span>Share profile</span>
            </div>
            {/* save pdf button  */}
            <div className="button">
              <i class="fa-solid fa-download"></i>
              <span>Save as PDF</span>
            </div>
          </div>
        </div>

        {/* Attendance , interaction and assignments wrapper  */}
        <div className="stat-cards-wrapper">
          {/* Attendance card */}
          <div className="stat-card">
            <div className="left">
              <span className="stat-name">Attendance</span>
              <span className="percentage">76%</span>
            </div>
            <div className="right">
              <i className="fa-solid fa-arrow-up-long"></i>
              <span>12%</span>
            </div>
          </div>
          {/* Interaction card */}
          <div className="stat-card">
            <div className="left">
              <span className="stat-name">Interaction</span>
              <span className="percentage">89%</span>
            </div>
            <div className="right">
              <i className="fa-solid fa-arrow-up-long"></i>
              <span>12%</span>
            </div>
          </div>
          {/* Assignments submitted card */}
          <div className="stat-card">
            <div className="Assignments-div">
              <div className="stat-name">Assignments submitted</div>
              <p>
                <span>6</span> out of 2 pending
              </p>
            </div>
          </div>
        </div>
        {/* Chart , And class standing  */}
        <div className="activity-wrapper">
          {/* chart  */}
          <div className="left-side">
            <div className="chart-wrapper">
              <div className="chart-heading">
                <p>
                  Activity this <span>week <i class="fa-solid fa-caret-down"></i></span>
                </p>
              </div>
              <Chart />
            </div>
            <div className="prog-stat">
              <p>You are doing good!</p>
              <p>
                Chances are strong for you to land a job in a company line
                Airbnb, Booking.com or Sena Tech.
              </p>
              <a href="#">
                {/* <i class="fa-brands fa-github"></i> */}
                <img src={bulb} alt="" />
                See tips for improvement
              </a>
            </div>
          </div>
          {/* Class Standing */}
          <div className="right-side">
            <ClassStanding />
          </div>
        </div>

        {/* about  */}
        <div className="about">
          <span>About</span>
          <i class="fa-solid fa-pen"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quis deserunt, commodi eius distinctio in. Omnis commodi vero iure
            eos vel ab, laudantium quaerat ratione placeat alias repellat
            dolorem similique? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Est tempora eos ea aperiam nulla dolorem in
            dolorum soluta neque ducimus voluptatibus minima a vitae quia,
            voluptates numquam maxime similique exercitationem?
          </p>
        </div>

        {/* Portfolio  */}
        <div className="full-portfilio-wrapper">
          <Portfolio />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
