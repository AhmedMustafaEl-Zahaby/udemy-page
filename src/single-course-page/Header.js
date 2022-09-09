import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCirclePlay,
  faComment,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faStar, faAngleRight, faCirclePlay, faComment);

function Header({ data }) {
  let stars = [];
  for (let i = 0; i < data.rate; i++)
    stars[i] = (
      <span key={i}>
        <FontAwesomeIcon icon="fa-solid fa-star" />
      </span>
    );

  return (
    <>
      <div className="header-container">
        <div className="topics">
          <span className="numOfTopic">{data.topic1} </span>
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          <span className="numOfTopic">{data.topic2} </span>
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          <span className="numOfTopic">{data.topic3} </span>
        </div>
        <h2 className="header-title">{data.title}</h2>
        <p className="header-paragraph" style={{ fontSize: "larger" }}>
          {data.desc}
        </p>
        <div className="stars-rating-students">
          <span className="header-rating">
            {data.rate} {stars}
          </span>{" "}
          <a href="#reviews" className="ratings">
            ({data.ratings} ratings
          </a>{" "}
          {data.students} students
        </div>
        <div className="created-by">
          Created by <a href="#">{data.created}</a>
        </div>
        <div>
          <i className="fa-solid fa-circle-exclamation"></i>
          <span className="last-updated">LastUpdated {data.lastUpdated}</span>

          <span className="lang">
            <i className="fa-solid fa-globe" style={{ marginRight: "5px" }}></i>{" "}
            {data.lang}
          </span>
          <span className="subtitles">
            <i
              className="fa-regular fa-closed-captioning"
              style={{ marginRight: "5px" }}
            ></i>{" "}
            {data.subtitles}
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
