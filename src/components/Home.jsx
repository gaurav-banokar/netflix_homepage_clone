import React from "react";
import logo from "../assets/logo.png";
import { langIcon } from "../data/svg";
// scss
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="topbox">
          <div className="logo">
            <img src={logo} alt="Netflix" />
          </div>

          <div className="rightbox">
            <div>
              <span>{langIcon}</span>c
              <select name="" id="">
                <option value="">English</option>
                <option value="">Hindi</option>
              </select>
            </div>

            <button>Sign In</button>
          </div>
        </div>
        <div className="bottombox">
          <h1>Unlimited movies, TV shows and more</h1>
          <h3>Watch anywhere. Cancel anytime</h3>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <div>
            <input type="email" name="" id="" placeholder="Email address" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
