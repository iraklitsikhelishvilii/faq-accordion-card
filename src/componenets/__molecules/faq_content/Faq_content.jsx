import React, { useEffect, useState } from "react";
import "../faq_content/Faq_content.css";
import Question_box from "../../__atoms/Question_box/Question_box";
import { FetchData } from "../../../services/Fetch";
function Faq_content() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    FetchData(setdata);
  }, []);

  return (
    <>
      <div className="Faq_content_main">
        <h1>FAQ</h1>
        <div className="Faq_content_box">
          {data.map((info, key) => {
            return (
              <Question_box quote={info.quote} author={info.author} key={key} />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Faq_content;
