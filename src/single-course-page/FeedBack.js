import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import LoadingBar from "./LoadingBar";
library.add(faStar);
function FeedBack(props) {
  let stars = [];
  let right = [];
  let bars = [];
  let i;
  const percentages = ["43%", "37%", "15%", "3%", "2%"];
  for (let j = 5; j > 0; j--) {
    for (i = 0; i < j; i++) {
      stars[i] = (
        <span key={i}>
          <FontAwesomeIcon icon="fa-solid fa-star" />
        </span>
      );
    }
    for (i = j; i < 5; i++)
      stars[i] = (
        <span key={i}>
          <FontAwesomeIcon icon="fa-regular fa-star" />
        </span>
      );
    right[5 - j] = (
      <div key={j} className="rate-division star">
        {stars} {percentages[5 - j]}
      </div>
    );
    stars = [];
    if (j - 1 === 0) {
      for (i = 0; i < 5; i++) {
        stars[i] = (
          <span key={i}>
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </span>
        );
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    bars[i] = <LoadingBar key={i} percentage={percentages[i]} />;
  }

  return (
    <>
      <h2>Students feedback</h2>
      <div className="feedback-container">
        <div className="left-side-rate">
          <div className="rate-of-left-side">4.4</div>
          <div>{stars}</div>
          <div className="left-side-title">Course Rating</div>
        </div>
        <div className="middle-side-rate">{bars}</div>
        <div className="right-side-rate">{right}</div>
      </div>
    </>
  );
}

export default FeedBack;
