import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SideBar({ data }) {
  const [x, setX] = useState(true);

  window.onscroll = (e) => {
    if (window.scrollY > 400 && window.innerWidth > 1272.73) setX(false);
    if (window.scrollY < 400) setX(true);
  };
  window.onresize = (e) => {
    if (window.innerWidth < 1272.73) setX(true);
  };
  return (
    <>
      <div
        className="hed"
        style={{
          display: x ? "none" : "block",
          position: "sticky",
          top: "0",
          zIndex: "2000",
        }}
      >
        <h4 className="titl">{data.title}</h4>
        <div className="stars-rating-students">
          <span className="header-rating">
            {data.rate} <FontAwesomeIcon icon="fa-solid fa-star" />
          </span>{" "}
          <a href="#reviews" className="ratings">
            ({data.ratings} ratings
          </a>{" "}
          <span className="students">{data.students} students </span>
        </div>
      </div>
      <div className="side-bar-container">
        <img
          src={data.image}
          alt="Course img"
          className="photo"
          style={{ display: x ? "block" : "none" }}
        ></img>
        <div
          className="child"
          style={{
            position: !x ? "fixed" : null,
            width: !x ? "25%" : null,
            top: !x ? "10px" : null,
            zIndex: "3000",
          }}
        >
          <h2 className="price">E£{data.price}</h2>
          <button className="add-to-cart">Add to cart</button>
          <button className="heart">
            <i className="fa-regular fa-heart"></i>
          </button>
          <button className="buy">Buy now</button>
          <div className="money-back">30-Day Money-Back Guarantee</div>

          <div className="include">
            <h6>This course includes:</h6>
            <div>
              <i className="fa-brands fa-youtube"></i>
              <span className="listDesc">
                &nbsp;&nbsp;19 hours on-demand video{" "}
              </span>
              <br></br>
              <i className="fa-regular fa-file"></i>
              <span className="listDesc">&nbsp;&nbsp;&nbsp; 3 articles </span>
              <br></br>
              <i className="fa-solid fa-file-arrow-down"></i>
              <span className="listDesc">
                &nbsp;&nbsp; 72 downloadable resources{" "}
              </span>
              <br></br>

              <i className="fa-solid fa-infinity"></i>
              <span className="listDesc">&nbsp; Full lifetime access </span>
              <br></br>

              <i className="fa-solid fa-mobile-screen-button"></i>
              <span className="listDesc">
                &nbsp;&nbsp;&nbsp; Access on mobile and TV{" "}
              </span>
              <br></br>

              <i className="fa-solid fa-medal"></i>
              <span className="listDesc">
                &nbsp; &nbsp;Certificate of completion{" "}
              </span>
            </div>
          </div>
          <div className="share-gift-apply">
            <span className="share">Share</span>
            <span className="share"> Gift this course</span>
            <span> Apply Coupon </span>
          </div>
          <hr></hr>
          <h5 className="train">Training 5 or more people?</h5>
          <p className="get">
            Get your team access to 17,000+ top Udemy courses anytime, anywhere.
          </p>
          <button className="try">Try Udemy Business</button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
