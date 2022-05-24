import React from 'react';
import { useState } from 'react';


const Accordion = ({ moduleTitle,duration,moduleDetails }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='title'>{moduleTitle}</div>
        <div className='Accoridon-icon'>{isActive ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
      </div>
      <div className="main-content-box"> 
      {isActive && <div className="du-content">  {duration}</div>}
{
        moduleDetails.map((item) => {
        return (
          // <p>{item}</p>
          isActive && <div className="accordion-content"> 
           <i className="fa-solid fa-circle-check"></i> <span> {item} </span>
           </div> 
        )
        })}
      </div>
    </div>
    

  );
};

export default Accordion;