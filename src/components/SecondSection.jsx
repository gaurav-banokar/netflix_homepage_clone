import React from "react";

//styles
import "../styles/secondSection.scss";

const SecondSection = ({ imageStyle, videoStyle, tvImage, tvVideo, heading,content }) => {
  return (
    <div className="secondSection">
      <div>
        <h1>{heading}</h1>
        <h3>
          {content}
        </h3>
      </div>

      <div>
        <div style={imageStyle}>
          <video src={tvVideo} autoPlay muted loop style={videoStyle}></video>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
