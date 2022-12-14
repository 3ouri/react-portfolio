import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, r) => {
    console.log("sending email functionality");
    console.log(JSON.stringify(data));

    const correctData = {};
    correctData.GuestName = data.name;
    correctData.Email = data.email;
    correctData.Phone = data.phone;
    correctData.MessageTitle = data.subject;
    correctData.Message = data.message;

    console.log(correctData);

    axios
      .post(
        "https://n39s5bi795.execute-api.us-east-1.amazonaws.com/v1/contact",
        correctData
      )
      .then(
        (response) => {
          console.log("Response: " + JSON.stringify(response));
        },
        (error) => {
          console.log("Error " + error);
        }
      );

    setSuccessMessage("Form sent successfully! I will contact you shortly.");

    r.target.reset();
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>
          Please fill the form and describe your project needs and I will
          contact you as soon as possible
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={register({
                    required: "Please enter your name",
                    maxLength: {
                      value: 30,
                      message: "Name value must be less than 30 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: "Please enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number (Optional)"
                  name="phone"
                  ref={register({
                  })}
                />
                <div className="line"></div>
              </div>
              {/* Subject INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={register({
                    required: "Please enter subject of your concern",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* Message INPUT */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly your concern..."
                  name="message"
                  ref={register({
                    required:
                      "Please don't forget to describe your project needs!",
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.message && errors.message.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
