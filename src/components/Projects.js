import React from "react";
import MUMScrumTool from "../images/projects/MUM_Scrum_Tool.png";
import Care2Share from "../images/projects/Care2Share.png";
import ANAZON from "../images/projects/ANAZON.png";
import Portfolio from "../images/projects/Portfolio.png";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  // MUMScrumTool
  const openPopupboxMUMScrumTool = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={MUMScrumTool}
          alt="MUMScrumTool Project"
        />
        <p>
          MUM Scrum is online tool for managing agile scrum, the tool developed
          using AngularJS as frontend and Java EE and Restful Backend.
        </p>
        <b>Github: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/diffdiff/MUM_SCRUM")}
        >
          MUM Scrum Tool
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "MUMScrumTool Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Care2Share
  const openPopupboxCare2Share = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={Care2Share}
          alt="Care2Share Project"
        />
        <p>
          It is a blog website that is open for public users to read other's
          posts in general, or by choosing specific user to show their posts,
          bio, and contact info.
        </p>
        <b>Github: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/3ouri/Care2Share")}
        >
          Care2Share
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Care2Share Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // ANAZON
  const openPopupboxANAZON = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={ANAZON}
          alt="ANAZON Project"
        />
        <p>
          This is an eCommerce website that clones Amazon shopping website functionalities. 
        </p>
        <b>Github: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/3ouri/ANAZON")}
        >
          ANAZON
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "ANAZON Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={Portfolio}
          alt="Portfolio Project"
        />
        <p>
          A portfolio website bulit using react js (frontend) and Amazon Web Services (backend).
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

  return (
    <div id="projects" className="projects-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Projects</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          {/* MUMScrumTool */}
          <div className="projects-image-box" onClick={openPopupboxMUMScrumTool}>
            <img className="projects-image" src={MUMScrumTool} alt="MUMScrumTool Project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
          {/* Care2Share */}
          <div className="projects-image-box" onClick={openPopupboxCare2Share}>
            <img
              className="projects-image"
              src={Care2Share}
              alt="Care2Share Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
          {/* ANAZON */}
          <div className="projects-image-box" onClick={openPopupboxANAZON}>
            <img className="projects-image" src={ANAZON} alt="ANAZON Project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
          {/* Portfolio */}
          <div className="projects-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="projects-image"
              src={Portfolio}
              alt="Portfolio Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Projects;
