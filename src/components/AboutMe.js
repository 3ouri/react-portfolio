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
            Hello! I am Abdallah Mustafa. I have been ...... Hello! I am
            Abdallah Mustafa. I have been ...... Hello! I am Abdallah Mustafa. I
            have been ...... Hello! I am Abdallah Mustafa. I have been ......
            Hello! I am Abdallah Mustafa. I have been ...... Hello! I am
            Abdallah Mustafa. I have been ...... Hello! I am Abdallah Mustafa. I
            have been ......
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
