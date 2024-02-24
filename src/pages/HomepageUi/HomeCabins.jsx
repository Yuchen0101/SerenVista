import { useRef } from "react";
import useScroll from "../../hooks/useScroll";

function HomeCabins({ children }) {
  const fadeElement = useRef(null);
  useScroll(fadeElement, "translateY(0)", 150);
  return (
    <>
      <section className="section-cabins" id="cabins" ref={fadeElement}>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Discover our cabins</h2>
        </div>
        <div className="grid">{children}</div>
      </section>
    </>
  );
}

export default HomeCabins;
