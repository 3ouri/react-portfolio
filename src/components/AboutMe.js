import React from "react";
import author from "../my-pic.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-mx-12">
          <div className="photo-wrapper mb-5">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-mx-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hello! I am Abdallah Mustafa. I am an experienced and
            detail-oriented Java Developer with over 8 years of experience
            implementing web applications using Spring Core, Spring Boot and
            Hibernate for the backend, where I have used Thymeleaf to handle the
            front-end, while providing efficient RESTful APIs as an intermediate
            channel between both. I have also managed the data-layer using
            relational and NoSQL databases. Expert in end-to-end development
            life cycle by using latest architectures such as Microservices,
            while improving the process itself by applying latest CMMI
            standards. Great team player who can lift the team spirit up.
            Skilled in handling client relations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
