import React from "react";

//styles
import "../styles/thirdSection.scss";

const ThirdSection = ({image, heading,content}) => {
  return (
    <div className="thirdSection">

      <div>
        <img src={image} alt="" />
      </div>

      <div>
        <h1>{heading}</h1>
        <h3>
          {content}
        </h3>
      </div>

    </div>
  );
};

export default ThirdSection;
