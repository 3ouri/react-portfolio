import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATRAS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <div>
      <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}>
        <>
          <img src={avatar1} alt="Happy Client 1" />
          <div className="myCarousel">
            <h3>Happy Client 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              maxime omnis illum perferendis repellat! Ipsum pariatur recusandae
              minus impedit architecto.
            </p>
          </div>
        </>

        <>
          <img src={avatar2} alt="Happy Client 2" />
          <div className="myCarousel">
            <h3>Happy Client 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              maxime omnis illum perferendis repellat! Ipsum pariatur recusandae
              minus impedit architecto.
            </p>
          </div>
        </>

        <>
          <img src={avatar3} alt="Happy Client 3" />
          <div className="myCarousel">
            <h3>Happy Client 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              maxime omnis illum perferendis repellat! Ipsum pariatur recusandae
              minus impedit architecto.
            </p>
          </div>
        </>

        <>
          <img src={avatar4} alt="Happy Client 4" />
          <div className="myCarousel">
            <h3>Happy Client 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              maxime omnis illum perferendis repellat! Ipsum pariatur recusandae
              minus impedit architecto.
            </p>
          </div>
        </>
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
