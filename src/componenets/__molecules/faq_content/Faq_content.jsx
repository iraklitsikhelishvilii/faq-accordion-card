import React, { useEffect, useState } from "react";
import "../faq_content/Faq_content.css";
import Question_box from "../../__atoms/Question_box/Question_box";
import { FetchData } from "../../../services/Fetch";

function Faq_content() {
  const [data, setdata] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    FetchData(setdata);
  }, []);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);   
  };

  return (
    <>
      <div className="Faq_content_main">
        <h1>FAQ</h1>
        <div className="Faq_content_box">
          {data.map((info, index) => (
            <Question_box
              key={index}
              quote={info.quote}
              author={info.author}
              isExpanded={expandedIndex === index}
              onClick={() => handleExpand(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq_content;
