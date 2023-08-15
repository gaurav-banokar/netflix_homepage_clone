import React from 'react'

import "../styles/fourthSection.scss";


const FourthSection = ({ tvImage, tvVideo, heading,content}) => {
  return (
    <div className="fourthSection">
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
  )
}

export default FourthSection