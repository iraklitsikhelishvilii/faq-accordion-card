import React, { useState } from "react";
import "../Question_box/Question_box.css";
import arrow_img from "../../../assets/images/Path2.svg";

function Question_box({ author, quote }) {
  const [Lengthened, setLengthened] = useState(false);
  const [bold, setbold] = useState(false);
  const [rotate, setrotate] = useState(false);
  const click = () => {
    setLengthened(!Lengthened);
    setbold(!bold);
    setrotate(!rotate);
  };
  return (
    <>
      <div
        onClick={click}
        className={`question_box ${Lengthened ? "lengthened" : ""}`}
      >
        <div className="question_box_heading">
          <h2 className={`${bold ? "bold" : ""}`}>{author}</h2>
          <img
            className={`arrow_img ${rotate ? "rotate" : ""}`}
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
