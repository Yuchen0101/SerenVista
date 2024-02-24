import { useEffect } from "react";
import debounce from "../utils/debounce";

export default function useScroll(fadeElement, transformDetails, offset) {
  useEffect(
    function () {
      const callback = function () {
        const scrollPosition = window.scrollY;
        const elementPosition = fadeElement.current.offsetTop;
        const triggerPoint = elementPosition - offset;
        if (scrollPosition > triggerPoint) {
          fadeElement.current.style.opacity = 1;
          fadeElement.current.style.transform = transformDetails;
        }
      };
      window.addEventListener("scroll", debounce(callback, 50));

      return () => {
        window.removeEventListener("scroll", callback);
      };
    },
    [fadeElement, transformDetails, offset]
  );
}
