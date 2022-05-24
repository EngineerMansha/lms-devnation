import React, { useState, useRef, useEffect } from "react";
import "./PortfolioDropDown.css";

const PortfolioDropDown = () => {
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
    <div >
      <div className="menu-container" ref={dropdownRef}>
        {/* + icon  */}
        <span onClick={() => setIsActive(!isActive)} className="menu-trigger">
          <i class="fa-solid fa-plus"></i>
        </span>
        {/* hide nav bar intially  */}
        {isActive && (
          <nav
            className={`menu  ${isActive ? "active" : "inactive"}`}
          >
            <div className="add-button-dropDown">
              {/* Link wrapper */}
              <div className="links-wrapper">
                <div className="link-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13L5.58579 8.41421C6.36683 7.63317 7.63316 7.63316 8.41421 8.41421L13 13M11 11L12.5858 9.41421C13.3668 8.63317 14.6332 8.63316 15.4142 9.41421L17 11M11 5H11.01M3 17H15C16.1046 17 17 16.1046 17 15V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z" stroke="#A8AFB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
                <div className="link">
                  <span>Links</span><br />
                  <span>Show links to content, Github etc.</span>
                </div>
              </div>
              {/* Media link wrapper  */}
              <div className="links-wrapper">
                <div className="media-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8284 8.17157C10.2663 6.60948 7.73367 6.60948 6.17157 8.17157L2.17157 12.1716C0.609476 13.7337 0.609476 16.2663 2.17157 17.8284C3.73367 19.3905 6.26633 19.3905 7.82843 17.8284L8.92999 16.7269M8.17157 11.8284C9.73367 13.3905 12.2663 13.3905 13.8284 11.8284L17.8284 7.82843C19.3905 6.26633 19.3905 3.73367 17.8284 2.17157C16.2663 0.609476 13.7337 0.609476 12.1716 2.17157L11.072 3.27118" stroke="#A8AFB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                </div>
                <div className="media">
                  <span>Media</span><br />
                  <span>Upload photos, documents and presentations</span>
                </div>
              </div>
            </div>
          </nav>
         
        )}

      </div>
    </div>
  )
}

export default PortfolioDropDown


