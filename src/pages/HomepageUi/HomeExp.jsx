import { useRef } from "react";
import useScroll from "../../hooks/useScroll";

function HomeExp() {
  const fadeElement = useRef(null);
  useScroll(fadeElement, "translateY(0)", 400);
  return (
    <section className="section-stories" id="experiences" ref={fadeElement}>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="video.mp4" type="video/mp4" />
          {/* <source src="video.webm" type="video/webm" /> */}
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="user(1).jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever!
            </h3>
            <p>
              My hiking adventure was beyond amazing! The trails near the hotel
              led me through serene forests, and I encountered some incredible
              wildlife along the way. It felt like an adventure straight out of
              a storybook. I was captivated by the opportunity to gaze at the
              stars from the hotel's open area. The clear night skies made
              stargazing an awe-inspiring and memorable affair.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="user(2).jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My holiday was lighten up
            </h3>
            <p>
              Every morning, I woke up to the most breathtaking sunrise views
              right from my room's window. The sight of the sun peeking over the
              horizon, painting the sky with vibrant hues, was absolutely
              mesmerizing. I was amazed by the hotel's attention to detail in
              integrating nature into every aspect of my stay. The personalized
              service, in harmony with the surrounding natural beauty, made my
              visit truly unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeExp;
