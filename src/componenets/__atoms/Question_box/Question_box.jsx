import React from "react";
import "../Question_box/Question_box.css";
import arrow_img from "../../../assets/images/Path2.svg";

function Question_box({ author, quote, isExpanded, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className={`question_box ${isExpanded ? "lengthened" : ""}`}
      >
        <div className="question_box_heading">
          <h2 className={`${isExpanded ? "bold" : ""}`}>{author}</h2>
          <img
            className={`arrow_img ${isExpanded ? "rotate" : ""}`}
            src={arrow_img}
            alt="Arrow Icon"
          />
        </div>
        <p className="question_box_p">{quote}</p>
      </div>
    </>
  );
}

export default Question_box;
