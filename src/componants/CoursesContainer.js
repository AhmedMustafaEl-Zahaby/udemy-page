import React from "react";
import CourseCard from "./CourseCard";
import Swipe from "./Swipe";
function CoursesContainer(props) {
  let data = props.course;
  const searchWord = props.searchWord;
  let view = data
    .filter((obj) => {
      return (
        obj["title"].toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
      );
    })
    .map((obj) => {
      return <CourseCard key={obj.id} course={obj}></CourseCard>;
    });
  return <Swipe courses={view} />;
}
export default CoursesContainer;
