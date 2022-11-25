import React from "react";
import logo from "../logo-no-background.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bg-color fixed-top">
      <div className="container">
        <a className="navbar-brand" href="https://3ouri.com">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="projects" offset={-110} className="nav-link" href="#">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-150} className="nav-link" href="#">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="blog" offset={-110} className="nav-link" href="#">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="testimonials" offset={-110} className="nav-link" href="#">
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
