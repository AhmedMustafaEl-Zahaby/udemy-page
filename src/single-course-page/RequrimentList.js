import React from "react";

function RequrimentList(props) {
  let data = props.data;
  return (
    <div className="requires-continer">
      <h2>Requirements</h2>
      {data.length !== 0 ? (
        data.map((e, index) => {
          return (
            <div key={index} className="requires-list-element">
              <i className="fa-solid fa-circle requires-list-dot"></i>
              <div className="requires-element">{e}</div>
            </div>
          );
        })
      ) : (
        <div>No Requirements Available For This Course</div>
      )}
    </div>
  );
}

export default RequrimentList;
