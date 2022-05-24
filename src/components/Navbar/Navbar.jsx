import React from "react";
import logo from "../../images/logo.png";
import ProfiledownMenu from "../NavDownMenu/ProfiledownMenu";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="navbar">
        <div className="n-left">
          {/* logo */}
          <div className="logo">
            <a href="#1" className="logo">
              <img src={logo} alt="DevNation" />
              <span>DevNation</span>
            </a>
          </div>
          {/* navigations  */}
          <div className="n-list ">
            <ul>
              {/* router  */}
            <Link  to="/" style={{ textDecoration: 'none' }} >
              <li>Dashboard</li>
          </Link>
              <li>Courses</li>
              <li>Projects</li>
              <li>Community</li>
            </ul>
          </div>
        </div>

        {/* navBar profile image side  */}
        <div className="n-right ">
          <ProfiledownMenu/>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
