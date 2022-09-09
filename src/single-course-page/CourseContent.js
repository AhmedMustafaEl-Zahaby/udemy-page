import React, { Fragment, useState } from "react";
import "./css/coursecontent.css";

const CourseContent = ({ sections }) => {
  let state = false;
  let [showMore, setShowMore] = useState(false);
  let view = sections.map((section, index) => {
    return (
      <div className="accordion-item" key={index}>
        <h2 className="accordion-header" id={`heading${index}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${index}`}
            aria-expanded="false"
            aria-controls={`collapse${index}`}
          >
            <div className="head d-flex justify-content-between">
              <span id="titleSpan">{section["title"]}</span>
              <span className="times" id="det">
                {`${section["lecture_count"]} lectures `}•
                {` ${section["content_length_text"]}`}
              </span>
            </div>
          </button>
        </h2>
        <div
          id={`collapse${index}`}
          className="accordion-collapse collapse hide"
          aria-labelledby={`heading${index}`}
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            {section["items"].map((item, index) => {
              return (
                <Fragment key={index}>
                  <div className="d-flex justify-content-between head item">
                    <span className="span-container">
                      <svg
                        className="svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                      </svg>
                      <span>{item["title"]}</span>
                    </span>
                    <span id="duration">{item["content_summary"]}</span>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="courseContent" id="curriculum">
        <h2 className="header">Course content</h2>
        {sections.length === 0 ? (
          <div>No Content Available For This Course</div>
        ) : (
          <>
            <div className="d-flex justify-content-between align-align-items-center">
              <p className="courseContentTotal">
                {sections.length} sections • 58 lectures • 4h 56m total length
              </p>
              <button className="expand">
                {state ? "Collapse" : "Expand"} All Sections
              </button>
            </div>
            <div className="accordion" id="accordion">
              {showMore === false
                ? view.slice(0, Math.min(5, view.length))
                : view}
              {Math.min(5, sections.length) !== sections.length &&
              showMore === false ? (
                <button
                  className="showMore-button"
                  onClick={() => setShowMore(true)}
                >
                  {sections.length - 5} more sections
                </button>
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CourseContent;
