import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./componants/css/course.css";
import "./componants/css/Nav-Bar-Styless.css";
import "./componants/css/Header-Styless.css";
import "./componants/css/Popover-Styless.css";
import "./componants/css/Catigoreis.css";
import "./single-course-page/css/Requires-Styless.css";
import "./single-course-page/css/header.css";
import "./componants/css/footer.css"
import "./single-course-page/css/sidebar.css";
import NavBar from "./componants/NavBar";
import Home from "./componants/Home";
import "./single-course-page/css/maincontent.css";
import CourseSinglePage from "./single-course-page/CourseSinglePage";
import "./single-course-page/css/Description-Styless.css";
import { useState } from "react";
import React from "react";
import Footer from "./componants/Footer";
// import { useEffect } from "react";
function App() {
  const [loaded, setLoaded] = useState(false);
  fetch("http://localhost:3000/data")
    .then((response) => {
      return response.json();
    })
    .then((homepage) => {
      localStorage.setItem("homepage", JSON.stringify(homepage));
    })
    .then(() => {
      setLoaded(true);
    });
  fetch("http://localhost:3000/reviews")
    .then((response) => {
      return response.json();
    })
    .then((reviews) => {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    })
    .then(() => {
      setLoaded(true);
    });
  // async function fetchData() {
  //   let homepage = await fetch("");
  //   homepage = await homepage.json();

  //   let reviews = await fetch("http://localhost:3000/reviews");
  //   reviews = await reviews.json();
  //   localStorage.setItem("reviews", JSON.stringify(reviews));
  //   setTimeout();
  // }
  // fetchData();
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home loaded={loaded} />} />
          <Route
            exact
            path="/course/:courseID"
            element={<CourseSinglePage />}
          />
          <Route exact path="/search" element={<Home loaded={loaded} />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
