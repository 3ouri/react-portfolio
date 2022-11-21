import React from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

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
                <Link smooth={true} to="services" offset={-110} className="footer-nav">Services</Link>
              </div>
              <div className="col">
                <Link smooth={true} to="experience" offset={-150} className="footer-nav">Experience</Link>
                <br />
                <Link smooth={true} to="portfolio" offset={-110} className="footer-nav">Portfolio</Link>
                <br />
                <Link smooth={true} to="testimonials" offset={-110} className="footer-nav">Testimonials</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url="https://github.com/3ouri"
                quote="FullStack Developer"
                hashtag="#java"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url="https://github.com/3ouri"
                quote="FullStack Developer"
                hashtag="#java"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url="https://github.com/3ouri"
                quote="FullStack Developer"
                hashtag="#java"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url="https://github.com/3ouri"
                quote="FullStack Developer"
                hashtag="#java"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp;AM | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
