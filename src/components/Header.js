import React from "react";
import ReactTyped from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web development and websites promotions</h1>
        <ReactTyped
            className="typed-text"
            strings={["Web Design", "Web Develpment", "Facebook Ads SMM", "Google Ads"]}
            typeSpeed={40}
            backSpeed={60}
            loop
        />
        <a href="#" className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;
