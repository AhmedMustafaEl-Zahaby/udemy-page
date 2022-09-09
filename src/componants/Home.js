import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Catigories from "./Catigories";
import CoursesList from "./CoursesList";
import Header from "./Header";

function Home({ loaded }) {
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  let searchWord = query.get("q") ?? "";
  return (
    <div className="Home-page">
      <Header />
      {loaded ? (
        <>
          <CoursesList searchWord={searchWord} />
          <Catigories />
        </>
      ) : (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default Home;
