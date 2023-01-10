import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATRAS IMPORTS
import lotfi_alsarori from "../images/testimonials/lotfi_alsarori.jfif";
import avatar_1 from "../images/testimonials/avatar_1.png";
import amal_alsadi from "../images/testimonials/amal_alsadi.jfif";
import ibrahim_shqair from "../images/testimonials/ibrahim_shqair.jfif";
import prof_walid_salameh from "../images/testimonials/prof_walid_salameh.jfif";
import moh_mihyar from "../images/testimonials/moh_mihyar.jfif";
import hisham_ahmad from "../images/testimonials/hisham_ahmad.jfif";

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
        dynamicHeight={true}
      >
        <div>
          <img src={lotfi_alsarori} alt="Lotfi Al-Sarori" />
          <div className="myCarousel">
            <h3>Lotfi Al-Sarori</h3>
            <p>
              I had the pleasure of working with Abdallah when he was at
              ESKADENIA Software working as a technical team lead managing Java
              software engineers. As the director of product marketing, I worked
              with Abdallah on several products, and we collaborated in a number
              of projects as well.{" "}
            </p>
            <p>
              Abdallah is a very bright and analytical individual. He is
              methodical, and he learns new things quickly. More than that,
              Abdallah can always be counted on to do what is asked of him. His
              job will always be completed on schedule, and he is an excellent
              team player with strong collaboration abilities and people’s
              skills. Abdallah takes responsibility for his actions, making him
              the sort of guy you want by your side when things don't go as
              planned because he will work with you to find answers and find new
              methods to deliver on promises.
            </p>
            <p>
              I have no qualms giving Abdallah the strongest recommendations for
              positions that utilize his strong technical, interpersonal, and
              leadership skills.
            </p>
          </div>
        </div>

        <div>
          <img src={avatar_1} alt="Avatar 1" />
          <div className="myCarousel">
            <h3>Anne McCollum</h3>
            <p>
              Abdallah was my teaching assistant for two courses. He is the kind
              of person who loves to be helpful to everyone. He very much
              enjoyed helping students and the students appreciated his help. He
              eagerly attended to every request of mine. His English is
              excellent, and he was both kind and intelligent in his execution
              of tasks. Abdallah would be a great addition to any software team.
            </p>
          </div>
        </div>

        <div>
          <img src={amal_alsadi} alt="Amal Al Sadi" />
          <div className="myCarousel">
            <h3>Amal Al Sadi</h3>
            <p>
              I've worked with Abdallah on many projects while he was in my
              team. He is a very hardworking and dependably skilled member with
              a positive attitude.
            </p>
            <p>
              He is a great team player who dedicates himself completely in the
              assignment he is given. He never let us down when it came to
              deliver assignments. He knows how to work under pressure to meet
              the deadlines.
            </p>
            <p>
              He is always friendly in nature and respects other team members
              and especially his seniors. Moreover how much he indulges in the
              project/task, he finds time to help his colleagues which is a very
              good thing. A very valuable asset for any company
            </p>
          </div>
        </div>

        <div>
          <img src={ibrahim_shqair} alt="Ibrahim Shqair" />
          <div className="myCarousel">
            <h3>Ibrahim Shqair</h3>
            <p>
              Abdallah worked with our company as one of our vendors for a long
              time. From my side I worked with him in close level on our payment
              system and found him very smart in his domain.
            </p>
            <p>
              As a client, I was impressed by his work ethic and managerial
              skills, and the way he managing his team. He is a hard-working
              with a great sense of humor and commitment to his work.
            </p>
            <p>
              He was always ready to go with any extra actions to provide
              high-quality customer service. Thanks a lot, Abdallah.
            </p>
          </div>
        </div>

        <div>
          <img src={prof_walid_salameh} alt="Prof. Walid Salameh" />
          <div className="myCarousel">
            <h3>Prof. Walid Salameh</h3>
            <p>
              I have known Mr. Abdallah Mustafa for 2 year in my capacity as a
              Professor, Department of Computer Science (PSUT) and at one course
              he excelled in. In this context, I wish to place on record the
              consistently diligent, handwork and excellent academic performance
              of Abdallah Mustafa during this time.
            </p>
            <p>
              As per his performance records, he can be placed in the top 5 of a
              class of 22 students in my subject. He is intelligent, inquisitive
              and yearns to gain an in-depth knowledge. With his determination
              and hard work, I have no doubt that he will succeed in all his
              endeavors. He is global orientation and experience provided
              invaluable insight regarding emerging needs to program machines to
              perform tasks that mimic the thought processes of the human mind.
              He is an extremely dedicated student setting high standards for
              his performance
            </p>
            <p>
              He has shown the motivation, intelligence, preserving nature and
              analytical aptitude for research. He is extremely co-operative and
              possesses the capacity to contribute. I recommend him in the
              strongest terms to your assistance in being one of your staff
              members at your firm as well.
            </p>
          </div>
        </div>

        <div>
          <img src={moh_mihyar} alt="Mohammad Mihyar" />
          <div className="myCarousel">
            <h3>Mohammad Mihyar</h3>
            <p>
              I had the distinct pleasure of working with Abdallah for Two years
              at ESKADENIA Software, collaborating on several project teams.
            </p>
            <p>
              Abdallah made sure everyone of the team left with a smile with his
              great spirit. His positive approach and attention to details make
              him a welcome addition to any team. I can thoroughly recommend
              Abdallah to you.
            </p>
          </div>
        </div>

        <div>
          <img src={hisham_ahmad} alt="Hisham Ahmad" />
          <div className="myCarousel">
            <h3>Hisham Ahmad</h3>
            <p>
              I have worked with Abdallah for two years, he dedicate himself to
              achieve his goals, never gives up, team player willing to help
              anyone in order to get things done.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
