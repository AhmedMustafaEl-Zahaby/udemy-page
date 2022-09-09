import React from "react";
import pic from "./images/alarm.jpg";
function Header() {
  return (
    <>
      <div className="big-screen back-ground">
        <div className="inside-text-card">
          <h1>New to Udemy? Lucky you.</h1>
          <p className="text-card-script">
            Udemy Business is trusted by 10.5K+ companies around the world. Find
            out what we can do for yours.
          </p>
        </div>
        <img
          className="inside-image"
          src="https://img-b.udemycdn.com/notices/featured_banner/image_udlite/9ea59bc2-bd61-463e-9ce9-7e71e8e586ae.jpg"
          alt="alarm"
        />
      </div>
      <div className="small-screen small-back-ground">
        <img
          className="outside-image"
          src={
            "https://img-b.udemycdn.com/notices/featured_banner/image_udlite/9ea59bc2-bd61-463e-9ce9-7e71e8e586ae.jpg"
          }
          alt="alarm"
        />
      </div>
      <div className="small-screen outside-text-card">
        <h1 className="small-screen">New to Udemy? Lucky you.</h1>
        <p className="small-screen text-card-script">
          Udemy Business is trusted by 10.5K+ companies around the world. Find
          out what we can do for yours.
        </p>
      </div>
    </>
  );
}

export default Header;
