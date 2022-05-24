import React, { useState, useRef, useEffect } from "react";
import "./ProfiledownMenu.css";
import avatar from "../../images/man.png";
import { Link } from "react-router-dom";


const DropdownMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef();
  useEffect(() => {
    const checkClickOutide = (e) => {
      if (isActive && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', checkClickOutide);
    return () => {
      document.removeEventListener('click', checkClickOutide);

    };
  }, [isActive]);


  return (
    <div className="container" >

      <div className="menu-container" ref={dropdownRef}>
        <button className="menu-trigger" onClick={() => setIsActive(!isActive)}>
          <img
            src={avatar}
            alt="User avatar"
          />
        </button>
        {/* hide nav bar intially  */}
        {isActive && (
          <nav
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
             
              <Link  to="/profile" className="link" >
              <li>
                <a href="#">Your Profile</a>
              </li>
          </Link>
              <li>
                <a href="#">Sign out</a>
              </li>
            </ul>
          </nav>
        )}

      </div>
    </div>
  );
}

export default DropdownMenu;
