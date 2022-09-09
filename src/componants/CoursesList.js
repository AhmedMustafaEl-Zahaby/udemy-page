import React, { useState } from "react";
import CoursesSection from "./CoursesSection";
function CoursesList({ searchWord }) {
  let [clicked, setClick] = useState("python");
  let [select, setSelect] = useState(["clicked", "", "", "", "", "", ""]);
  let values = ["", "", "", "", "", "", ""];
  let [prev, setPrev] = useState(0);
  return (
    <div className="section">
      <div className="course-list">
        <h3 className="list-contents list-title">
          A Broad selection of courses
        </h3>
        <p className="list-contents list-discription">
          Choose from 185,000 online video cources with new additions published
          every month
        </p>
        <ul className="ul-list">
          <li
            id="li-1"
            onClick={() => {
              setClick("python");
              values[prev] = "";
              values[0] = "clicked";
              setPrev(0);
              setSelect(values);
            }}
            className={select[0] + " list-element not-mergin"}
          >
            Python
          </li>
          <li
            id="li-2"
            onClick={() => {
              setClick("excel");
              values[prev] = "";
              values[1] = "clicked";
              setPrev(1);
              setSelect(values);
            }}
            className={select[1] + " list-element"}
          >
            Excel
          </li>
          <li
            id="li-3"
            className={select[2] + " list-element"}
            onClick={() => {
              setClick("web");
              values[prev] = "";
              values[2] = "clicked";
              setPrev(2);
              setSelect(values);
            }}
          >
            Web Development
          </li>
          <li
            id="li-4"
            className={select[3] + " list-element"}
            onClick={() => {
              setClick("js");
              values[prev] = "";
              values[3] = "clicked";
              setPrev(3);
              setSelect(values);
            }}
          >
            Java Script
          </li>
          <li
            id="li-5"
            className={select[4] + " list-element"}
            onClick={() => {
              setClick("data");
              values[prev] = "";
              values[4] = "clicked";
              setPrev(4);
              setSelect(values);
            }}
          >
            Data Science
          </li>
          <li
            id="li-6"
            className={select[5] + " list-element"}
            onClick={() => {
              setClick("aws");
              values[prev] = "";
              values[5] = "clicked";
              setPrev(5);
              setSelect(values);
            }}
          >
            AWS Certifications
          </li>
          <li
            id="li-7"
            className={select[6] + " list-element"}
            onClick={() => {
              setClick("draw");
              values[prev] = "";
              values[6] = "clicked";
              setPrev(6);
              setSelect(values);
            }}
          >
            Drawing
          </li>
        </ul>
      </div>
      <CoursesSection course={clicked} searchWord={searchWord}></CoursesSection>
    </div>
  );
}
export default CoursesList;
