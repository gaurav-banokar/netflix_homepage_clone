import React from "react";
import Accordion from "./Accordion";

//styles
import "../styles/accordionSection.scss";

const AccordionSection = ({ accordion }) => {
  return (
    <div className="accordionSection">
      <div>
        <h1>Frequently Asked Questions</h1>
        {accordion.map((accordion, i) => (
          <Accordion accordion={accordion} key={i} />
        ))}
      </div>
      <div>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div>
          <input type="email" name="" id="" placeholder="Email Address" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
