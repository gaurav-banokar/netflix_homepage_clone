import React from "react";

//styles
import "../styles/secondSection.scss";

const SecondSection = ({ tvImage, tvVideo, heading,content }) => {
  return (
    <div className="secondSection">
      <div>
        <h1>{heading}</h1>
        <h3>
          {content}
        </h3>
      </div>

      <div>
        <div>
          <video src={tvVideo} autoPlay muted loop ></video>
          <img src={tvImage} alt="tvImage"  />
          
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
