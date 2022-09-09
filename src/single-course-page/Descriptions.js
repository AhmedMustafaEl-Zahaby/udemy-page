import React, { useState } from "react";
import { Markup } from "interweave";
function Descriptions(props) {
  let text = JSON.stringify(props.text.text);
  let toWhom = JSON.stringify(props.text.to_who);
  text = text.substring(1, text.length - 2);
  toWhom = toWhom.substring(1, toWhom.length - 2);
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num);
  }
  const [showMore, setShowMore] = useState(false);
  if (showMore) {
    return (
      <div className="descrip-container">
        <h2>Description</h2>
        <Markup content={text} className="Desc-content" />
        <div className="to-who">
          <Markup content={toWhom} />
        </div>
        <div className="show-button" onClick={() => setShowMore(false)}>
          <div className="butt-content">Show less</div>
          <div className="butt-icon">
            <i className="fa-solid fa-chevron-up size-it"></i>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="descrip-container">
      <h2>Description</h2>
      <Markup content={truncateString(text, 400)} className="Desc-content" />
      <div className="show-button" onClick={() => setShowMore(true)}>
        <div className="butt-content">Show more</div>
        <div className="butt-icon">
          <i className="fa-sharp fa-solid fa-chevron-down size-it"></i>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
