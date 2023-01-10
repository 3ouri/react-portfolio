import React from "react";
import { Link } from "react-scroll";
// ICONS
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>1000 N 4th Street Fairfield IA 52557</p>
            </div>
            <div className="d-flex">
              <a href="tel:+16418192418">+1(641)819-2418</a>
            </div>
            <div className="d-flex">
              <a href="mailto:amustafa@miu.edu">amustafa@miu.edu</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" offset={-110} className="footer-nav">Home</Link>
                <br />
                <Link smooth={true} to="about" offset={-110} className="footer-nav">About me</Link>
                <br />
                <Link smooth={true} to="projects" offset={-110} className="footer-nav">Projects</Link>
              </div>
              <div className="col">
                <Link smooth={true} to="experience" offset={-150} className="footer-nav">Experience</Link>
                <br />
                <Link smooth={true} to="services" offset={-110} className="footer-nav">Skills</Link>
                <br />
                <Link smooth={true} to="blog" offset={-110} className="footer-nav">Blog</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/3ouri" target={"_blank"}
              >
                <FaFacebook className="mx-3" size={36} />
              </a>
              <a href="https://www.twitter.com/3ouri" target={"_blank"}
              >
                <FaTwitter   className="mx-3" size={36} />
              </a>
              <a href="https://www.instagram.com/3ouri" target={"_blank"}
              >
                <FaInstagram className="mx-3" size={36} />
              </a>
              <a href="https://www.github.com/3ouri" target={"_blank"}
              >
                <FaGithub className="mx-3" size={36} />
              </a>
              <a href="https://www.linkedin.com/in/abdallahfmustafa" target={"_blank"}
              >
                <FaLinkedin className="mx-3" size={36} />
              </a>
            </div>
            <p className="pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp;""am | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
