import React, { useEffect, useState } from "react";
import RequrimentList from "./RequrimentList";
import "./css/feedback.css";
import "./css/review.css";
import Chanel from "./Chanel";
import FeedBack from "./FeedBack";
import "./css/chanel.css";
import Reviews from "./Reviews";
import Header from "./Header";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import WhatYouWillLearn from "./WhatYouWillLearn";
import CourseContent from "./CourseContent";
import Descriptions from "./Descriptions";
import Text from "./Desic.json";
function CourseSinglePage() {
  const { courseID } = useParams();
  const [isPending, setPending] = useState(true);
  const [data, setData] = useState([]);
  const [sections, setSections] = useState([]);
  const homepageData = JSON.parse(localStorage.getItem("homepage"));
  let course;
  let name;
  for (let courseName in homepageData) {
    course = homepageData[courseName]["courses"].find(
      (element) => element["id"] === parseInt(courseID)
    );
    if (course !== undefined) {
      name = courseName;
      break;
    }
  }
  const reviews = JSON.parse(localStorage.getItem("reviews"));
  const attributes = {
    image: "https://img-c.udemycdn.com/user/200_H/52310762_220a.jpg",
    title: "The Codex",
    description: "Teaching Python through Projects",
    rate: "4.4",
    reviews: "73,767",
    students: "890,984",
    courses: "16",
    about:
      "You've taken a lengthy and boring coding class, but you're clueless about applying these concepts to build your ideas. The Codex shows you how to build fun, practical projects. Now, you can stand out from the crowd and land your dream job.",
  };
  useEffect(() => {
    fetch("http://localhost:3000/singleCourse")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data[courseID]);
        setPending(false);
        setSections(data[courseID]["curriculum_context"]["data"]["sections"]);
      })
      .catch((error) => {
        setSections([]);
      });
    return () => {};
  }, [courseID]);
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const headerAttributes = {
    topic1: "Development",
    topic2: "Software Engineering",
    topic3: name,
    title: course != undefined ? course["title"] : "Title",
    desc: course != undefined ? course["headline"] : "Description",
    rate: course != undefined ? course["rating"].toFixed(1) : "Rate",
    ratings: course != undefined ? course["people"].slice(1) : "people ratings",
    students: "1,182",
    created: "GetSkilled Org",
    lastUpdated: "3/2022",
    lang: "English",
    subtitles: "English",
  };
  const sideBarAttr = {
    title: course != undefined ? course["title"] : "Title",
    students: "1,182",
    rate: course != undefined ? course["rating"].toFixed(1) : "Rate",
    ratings: course != undefined ? course["people"].slice(1) : "people ratings",
    image: course != undefined ? course["image"] : "Image",
    price: course != undefined ? course["price"] : "Price",
  };
  let text = Text;
  function renderData() {
    return (
      <>
        <SideBar data={sideBarAttr} />
        <Header data={headerAttributes} />
        <div className="single-page-main-content">
          <NavBar></NavBar>
          <WhatYouWillLearn></WhatYouWillLearn>
          <RequrimentList data={data ? data["details"]["Requirements"] : []} />
          <Descriptions text={text} />
          <CourseContent sections={sections}></CourseContent>
          <Chanel data={attributes} icon="fa-solid fa-star" type="subscribe" />
          <FeedBack rate={5} />
          <Reviews id={courseID} />
        </div>
      </>
    );
  }
  return (
    <>
      {isPending ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        renderData()
      )}
      ;
    </>
  );
}

export default CourseSinglePage;
