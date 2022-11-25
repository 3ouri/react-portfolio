import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faCode, faTerminal, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Key Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
              </div>
              <h3>Java Development</h3>
              <p>
                Sound knowledge in Java with a good understanding of its ecosystems - OOP Patterns and Concepts - Different design and architectural patterns - Clean Code.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faTerminal} size="2x" />
              </div>
              <h3>DevOps</h3>
              <p>
                Linux Fundamentals and Scripting - Testing - Security - Containerization - CI/CD - Version Management.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faGlobe}
                  size="2x"
                />
              </div>
              <h3>APIs</h3>
              <p>
                Cross-platform development - API design - Integration knowledge - API orchestration skills - Programming tools.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faAws} size="2x" />
              </div>
              <h3>Cloud Computing</h3>
              <p>
                Data Storage Fundamentals - Networking - Security Foundations - Cloud-specific patterns and technologies - AWS Service Selection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
