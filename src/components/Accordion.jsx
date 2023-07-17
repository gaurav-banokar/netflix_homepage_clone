import React, { useState } from "react";

import { add,close } from "../data/svg";
import "../styles/accordion.scss"; //styles

const Accordion = ({ accordion }) => {

  const [showBox, setShowBox] = useState(false);

  return (
    <div className="accordion">
      <div className="accordionBox">
        <div className="question" onClick={() => setShowBox(!showBox)}>
          <p>{accordion.question}</p>
          <span>{showBox ? close : add}</span>
        </div>
        {showBox && (
          <div className="answer">
            <p>{accordion.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
