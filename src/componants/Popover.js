import React from "react";
function Popover(props) {
  let data = props.data;
  function renderData() {
    let view = data.list.map((e, index) => {
      return (
        <div key={index} className="pop-list-item">
          <i className="fa-solid fa-check check-mark"></i>
          <div className="pop-list-content">{e}</div>
        </div>
      );
    });
    return view;
  }
  return (
    <div className="pop-div">
      <h3 className="pop-title">{props.title}</h3>
      <p className="pop-date">
        <span className="none-font">Updated </span>
        {data.date}
      </p>
      <p className="pop-hours">{data.hours}</p>
      <p className="pop-description">{data.descrip}</p>
      <div className="pop-list">{renderData()}</div>
      <div className="add-to-chart">
        <button className="pop-button">Add to cart</button>
        <div className="add-to-faiv-button">
          <i className="far fa-heart fa-2xl like-mark"></i>
        </div>
      </div>
    </div>
  );
}

export default Popover;
