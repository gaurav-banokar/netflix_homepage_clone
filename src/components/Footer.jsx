import React from "react";
import "../styles/footer.scss";
import { langIcon } from "../data/svg.js";

const Footer = ({ footerOne, footerTwo, footerThree }) => {
  return (
    <div className="footer">
      <div className="footerBox">
        <div className="first">
          <p>
            Questions? call <a href="tel:+">000-800-919-1694</a>
          </p>
        </div>
        <div className="second">
          <div>
            {Object.keys(footerOne).map((item) => (
              <span>
                <a href={footerOne[item]}>{item}</a>
              </span>
            ))}
          </div>
          <div>
            {Object.keys(footerTwo).map((item) => (
              <span>
                <a href={footerTwo[item]}>{item}</a>
              </span>
            ))}
          </div>
          <div>
            {Object.keys(footerThree).map((item) => (
              <span>
                <a href={footerThree[item]}>{item}</a>
              </span>
            ))}
          </div>
        </div>
        <div className="third">
          <div>
            <span>{langIcon}</span>
            <select>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
        <div className="fourth">
          <p>Netflix India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
