import { useRef } from "react";
import useScroll from "../../hooks/useScroll";

function HomeAbout() {
  const fadeElement = useRef(null);

  useScroll(fadeElement, "translateY(0)", 100);

  return (
    <>
      <section className="section-about" id="about" ref={fadeElement}>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            indulge in an oasis of natural splendor
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Unwind amidst the serenity of SerenVista Haven
            </h3>
            <p className="paragraph">
              Set against stunning vistas and enveloped by the beauty of the
              great outdoors, our hotel offers a haven for those seeking solace
              and connection with nature. Immerse yourself in the tranquility of
              our accommodations thoughtfully crafted to blend seamlessly with
              the surrounding landscapes.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Immerse yourself in the beauty of the surrounding scenery
            </h3>
            <p className="paragraph">
              Discover serene accommodations designed to harmonize with the
              environment, where every moment promises a rejuvenating
              experience. From breathtaking vistas to serene trails, embark on
              an unforgettable journey at SerenView Retreats, where nature's
              allure meets unparalleled comfort.
            </p>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src="cabin(1).jpg"
                alt="cabin 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src="cabin(2).jpg"
                alt="cabin 2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src="cabin(3).jpg"
                alt="cabin 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeAbout;
