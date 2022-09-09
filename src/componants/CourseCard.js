import React, { useState } from "react";
import Tippy from "@tippy.js/react";
import Popover from "./Popover";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
function CourseCard(props) {
  let obj = props.course;
  let [popper, setPopper] = useState(false);
  return (
    <Tippy
      content={<Popover data={obj["popData"]} title={obj["title"]} />}
      arrow={true}
      placement="right"
      // interactiveBorder={30}
    >
      <Link
        key={obj.id}
        className="course-card"
        onMouseEnter={() => {
          setPopper(true);
        }}
        onMouseLeave={() => {
          setPopper(false);
        }}
        aria-expanded={popper}
        to={`/course/${obj.id}`}
      >
        <img
          className="course-image"
          src={obj["image"]}
          alt={obj["title"]}
        ></img>
        <h3 className="course-title">{obj["title"]}</h3>
        <p className="course-author">{obj["author"][0]["name"]}</p>

        <div className="rate-container">
          <span className="rate">
            {+obj["rating"].toString().substr(0, 3) + " "}
          </span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
          <span className="students">{obj["people"]}</span>
          <h3 className="price" style={{ paddingLeft: 0, margin: 0 }}>
            {"E€" + +obj["price"]}
          </h3>
        </div>
      </Link>
    </Tippy>
  );
}
export default CourseCard;
