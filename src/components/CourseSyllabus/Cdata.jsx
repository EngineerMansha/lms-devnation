import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Accordion from "./Accordion";
import "./course.css"



function Cdata() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [accordionData, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://localhost:5001/devnation-asia-app/asia-southeast1/user/syllabus/getAll/3")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div><div class='pulse'>

      </div></div>;
    } else {
        return (
            <div>
              <div className="accordion">
                {accordionData.map(({moduleDetails,duration,moduleTitle}) => (
                  <Accordion moduleDetails={moduleDetails} duration={duration} moduleTitle={moduleTitle}  />
                ))}
              </div>
            </div>
          );
      
    }
}
export default Cdata;
