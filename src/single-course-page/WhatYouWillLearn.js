// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./css/whatyouwilllearn.css";

const WhatYouWillLearn = () => {
  let data = [
    "To take your basic skills to the next level",
    "To gain a solid understanding of the more powerful features and functions",
    "To be able to use these skills in a commercial environment",
  ];
  return (
    <div className="whatyouwilllearnContainer" id="overview">
      <h2> What you'll learn </h2>
      <ul className="row">
        {data.map((item, index) => {
          return (
            <div className="coll" key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
              <li className="coll">{item}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default WhatYouWillLearn;
