import React from "react";
import ReactTyped from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Full Stack Development and Software Engineering</h1>
        <ReactTyped
            className="typed-text"
            strings={["Java Full Stack Development", "Software Architecture", "DevOps Engineering", "Building APIs", "AWS Cloud Computing"]}
            typeSpeed={25}
            backSpeed={25}
            loop
        />
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer" href="#">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
