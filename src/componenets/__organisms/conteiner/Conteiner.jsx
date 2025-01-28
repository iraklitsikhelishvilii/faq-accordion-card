import React from "react";
import "../conteiner/Conteiner.css";
import img1 from "../../../assets/images/PathCopy.svg";
import Faq_content from "../../__molecules/faq_content/Faq_content";
import Main_img from "../../../assets/images/mention_isometric2.svg";
import cube_img from "../../../assets/images/Group6.svg";
import img2 from "../../../assets/images/PathCopy2.svg";
import img3 from "../../../assets/images/PathCopy3.svg";
import main_img_mobile from "../../../assets/images/Group4.svg";
import img_mobile from "../../../assets/images/PathCopy(1).svg";
function Conteiner() {
  return (
    <>
      <div className="conteiner">
        <img className="main_img_mobile" src={main_img_mobile} alt="" />
        <img className="img_mobile" src={img_mobile} alt="" />
        <img className="img2" src={img2} alt="" />
        <img className="img3" src={img3} alt="" />
        <img className="img1" src={img1} alt="" />
        <img className="main_img" src={Main_img} alt="" />
        <img className="Cube_img" src={cube_img} alt="" />
        <Faq_content />
      </div>
    </>
  );
}
export default Conteiner;
