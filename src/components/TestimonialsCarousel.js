import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATRAS IMPORTS
import avatar1 from "../images/testimonials/moh_mihyar.jfif";
import avatar2 from "../images/testimonials/hisham_ahmad.jfif";
import avatar3 from "../images/testimonials/firas_kamal.jfif";

const TestimonialsCarousel = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <>
          <img src={avatar1} alt="Happy Client 1" />
          <div className="myCarousel">
            <h3>Mohammad Mihyar</h3>
            <p>
              I had the distinct pleasure of working with Abdallah for Two years
              at ESKADENIA Software, collaborating on several project teams.
              Abdallah made sure everyone of the team left with a smile with his
              great spirit. His positive approach and attention to details make
              him a welcome addition to any team. I can thoroughly recommend
              Abdallah to you.
            </p>
          </div>
        </>

        <>
          <img src={avatar2} alt="Happy Client 2" />
          <div className="myCarousel">
            <h3>Hisham Ahmad</h3>
            <p>
              I have worked with Abdallah for two years, he dedicate himself to
              achieve his goals, never gives up, team player willing to help
              anyone in order to get things done.
            </p>
          </div>
        </>

        <>
          <img src={avatar3} alt="Happy Client 3" />
          <div className="myCarousel">
            <h3>Firas Kamal</h3>
            <p>
              Abdallah is a very hard worker, treats people nicely and you can
              depend on him when needed. He is smart and fast learner and a
              delightful person to be around. It is a joy to work with him.
            </p>
          </div>
        </>
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
