import React from "react";
import first from "../images/netflix.png";
import second from "../images/city-guide-app.png";
import third from "../images/portfolio.png";
import fourth from "../images/task-manager.png";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {
  // First
  const openPopupboxFirst = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={first}
          alt="First Project"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          labore animi cumque vero neque deleniti voluptates fugiat nemo eos
          quidem.
        </p>
        <b>Github:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "First Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    });
  };

  // second
  const openPopupboxSecond = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={second}
          alt="Second Project"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          labore animi cumque vero neque deleniti voluptates fugiat nemo eos
          quidem.
        </p>
        <b>Github:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Second Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    });
  };

  // third
  const openPopupboxThird = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={third}
          alt="Third Project"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          labore animi cumque vero neque deleniti voluptates fugiat nemo eos
          quidem.
        </p>
        <b>Github:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Third Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    });
  };

  // fourth
  const openPopupboxFourth = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={fourth}
          alt="Fourth Project"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          labore animi cumque vero neque deleniti voluptates fugiat nemo eos
          quidem.
        </p>
        <b>Github:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Fourth Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    });
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          {/* First */}
          <div className="portfolio-image-box" onClick={openPopupboxFirst}>
            <img
              className="portfolio-image"
              src={first}
              alt="First Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* Second */}
          <div className="portfolio-image-box" onClick={openPopupboxSecond}>
            <img
              className="portfolio-image"
              src={second}
              alt="Second Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* Third */}
          <div className="portfolio-image-box" onClick={openPopupboxThird}>
            <img
              className="portfolio-image"
              src={third}
              alt="Third Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* Fourth */}
          <div className="portfolio-image-box" onClick={openPopupboxFourth}>
            <img
              className="portfolio-image"
              src={fourth}
              alt="Fourth Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
