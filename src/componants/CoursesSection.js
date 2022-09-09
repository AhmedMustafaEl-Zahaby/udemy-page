import React from "react";
import Swipe from "./Swipe";
import CoursesContainer from "./CoursesContainer";
function CoursesSection(props) {
  const name = props.course;
  const searchWord = props.searchWord;
  const homepage = JSON.parse(localStorage.getItem("homepage"));
  let sectionTitle = homepage[name].sectionTitle;
  let courseName = homepage[name].courseName;
  let courseDesc = homepage[name].courseDesc;
  let courses = homepage[name].courses;
  return (
    <div className="contain">
      <h2 className="header">{sectionTitle}</h2>
      <p className="description">{courseDesc}</p>
      <button className="explore-button">Explore {courseName}</button>
      <CoursesContainer
        course={courses}
        searchWord={searchWord}
      ></CoursesContainer>
    </div>
  );
}

export default CoursesSection;
