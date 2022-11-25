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
            Hello! I am Abdallah Mustafa. I am a resourceful Java full stack
            developer with more than 8 years of hands-on experience developing
            innovative and functional web applications. Talented team member who
            effectively contributes to all phases of the software development
            life cycle while ensuring projects are completed on time and
            according to client specifications and requirements. Skilled at
            implementing Java EE web applications using Spring or JSF
            frameworks, and building efficient APIs using RESTful webservice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
