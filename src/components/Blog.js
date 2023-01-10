import React from "react";
import Portfolio from "../images/blog/architecture_diagram.png";
import Redis from "../images/blog/aws_elasticache_for_redis.png";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Blog = () => {
  // Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="blog-image-popupbox"
          src={Portfolio}
          alt="Portfolio Project Architecture Diagram"
        />
        <p>
          This is the architecture diagram of the Portfolio project.
        </p>
        <b>Github: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/3ouri/react-portfolio")}
        >
          Portfolio
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Portfolio Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Redis
  const openPopupboxRedis = () => {
    const content = (
      <>
        <img
          className="blog-image-popupbox"
          src={Redis}
          alt="Amazon ElastiCache for Redis"
        />
        <p>
          A document including a tutorial and walk through on how to simply create and handle Amazon ElastiCache for Redis.
        </p>
        <b>Document: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("/Amazon%20ElastiCache%20for%20Redis.pdf")}
        >
          Amazon ElastiCache for Redis
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Amazon ElastiCache for Redis",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  return (
    <div id="blog" className="blog-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Blog</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          {/* Portfolio */}
          <div className="blog-image-box" onClick={openPopupboxPortfolio}>
            <img className="blog-image" src={Portfolio} alt="Portfolio Project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="blog-icon" icon={faSearchPlus} />
          </div>
          {/* Redis */}
          <div className="blog-image-box" onClick={openPopupboxRedis}>
            <img
              className="blog-image"
              src={Redis}
              alt="Amazon ElastiCache for Redis"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="blog-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Blog;
