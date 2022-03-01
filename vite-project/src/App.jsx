import React, { useState } from "react";

import mainImg from "./images/illustration-dashboard.png";
import logo from "./images/logo.svg";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const App = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const emailRegex = /\S+@\S+\.\S+/;

  const checkEmail = (email) => {
    if (emailRegex.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    checkEmail(email);
  };
  return (
    <main>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="text">
          <h1>
            We are launching <span>soon!</span>
          </h1>
          <p>Subscribe and get notified</p>
        </div>
        <form action="" noValidate onSubmit={submitForm}>
          <input
            className={"input " + (!isValid && "input--error")}
            type="email"
            placeholder="Your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={"errorText " + (!isValid && "errorText--error")}>
            Please provide a valid email address
          </p>
          <button type="submit">Notify Me</button>
        </form>
      </div>
      <div className="main">
        <img src={mainImg} alt="" />
      </div>
      <div className="footer">
        <div className="socials">
          <i>
            <FaFacebookF />
          </i>
          <i>
            <FaTwitter />
          </i>
          <i>
            <FaInstagram />
          </i>
        </div>
        <p className="copy">&copy; Copyright Ping. All rights reserved.</p>
      </div>
    </main>
  );
};

export default App;
