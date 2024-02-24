import { useRef } from "react";
import { SlEmotsmile } from "react-icons/sl";
import useScroll from "../../hooks/useScroll";

function HomeFeatures() {
  const fadeElement = useRef(null);
  useScroll(fadeElement, "translateY(0) skewY(-7deg)", 350);

  return (
    <>
      <section className="section-features" id="features" ref={fadeElement}>
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icofont-flora-flower"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Soothing Environment
              </h3>
              <p className="feature-box__text">
                Guests can immerse themselves in a tranquil environment
                surrounded by natural beauty, offering a peaceful and calming
                atmosphere throughout their stay.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icofont-tree-alt"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Health and Wellness Benefits
              </h3>
              <p className="feature-box__text">
                Being close to nature has been associated with reduced stress
                levels and improved well-being. Guests may experience relaxation
                and rejuvenation simply by being in such an environment.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icofont-dart"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Economical Recreation
              </h3>
              <p className="feature-box__text">
                Proximity to nature offers guests cost-effective recreational
                activities such as hiking, nature walks, or simply enjoying the
                scenery, which doesn't require additional expenses.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon  icofont-love"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Tailored Experiences
              </h3>
              <p className="feature-box__text">
                Observing guests' habits or requests during customers' stay
                allows the hotel to anticipate their needs. This could include
                preferences for room temperature, pillow type, or room layout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeFeatures;
