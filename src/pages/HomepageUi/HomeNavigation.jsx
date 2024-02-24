import { useState } from "react";
import { NavLink } from "react-router-dom";

function HomeNavigation() {
  const [on, setOn] = useState(false);

  return (
    <>
      <div className="navigation">
        <div
          className={`navigation__button ${on ? "navigation__button--on" : ""}`}
          onClick={() => {
            setOn((on) => !on);
            console.log(on);
          }}
        >
          <span className="navigation__icon"></span>
        </div>
        <div
          className={`navigation__background ${
            on ? "navigation__background--on" : ""
          }`}
        ></div>
        <nav className={`navigation__nav ${on ? "navigation__nav--on" : ""}`}>
          <ul className="navigation__list">
            <li className="navigation__item">
              <a
                href="#about"
                className="navigation__link"
                onClick={() => setOn((on) => !on)}
              >
                About Natours
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#features"
                className="navigation__link"
                onClick={() => setOn((on) => !on)}
              >
                Features
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#cabins"
                className="navigation__link"
                onClick={() => setOn((on) => !on)}
              >
                Cabins
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#experiences"
                className="navigation__link"
                onClick={() => setOn((on) => !on)}
              >
                FeedBack
              </a>
            </li>
            <li className="navigation__item navigation__item--staff">
              <NavLink className="navigation__link" to="/login">
                Staff Entrance
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HomeNavigation;
