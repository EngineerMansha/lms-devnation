import React from "react";
import "./ProgressBar.css";
const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "#e6e9e9",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
    boxShadow: "0px 4px 10px -2px blue",
  };

  const progresstext = {
    color: "black",
    fontWeight: 300,
  };
  return (
    <div className="progressWrapper">
      <div style={Parentdiv}>
        <div style={Childdiv}>
        </div>
      </div>
          <span className="percent" style={progresstext}>{`${progress}%`}</span>
    </div>
  );
};

export default ProgressBar;
