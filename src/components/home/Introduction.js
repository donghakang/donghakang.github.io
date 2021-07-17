import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useSpring, animated } from "react-spring";

const IntroductionAnimation = () => {
  return (
    <div style={{ marginLeft: "4px" }} className="animated-text">
      <div className="animated-text-desc">👨🏻‍💻 Fullstack developer</div>
      <div className="animated-text-desc">🧑🏻‍🎨 Web designer</div>
      <div className="animated-text-desc">👨🏻‍🔬 Computer Scientist</div>
      <div className="animated-text-desc">👨🏻‍💻 Fullstack developer</div>
    </div>
  );
};

const ContactButton = () => {
  const [contactMode, setContactMode] = useState(false);
  const props = useSpring({
    x: contactMode ? 0 : -100,
    opacity: contactMode ? 1 : 0,
  });

  return (
    <div className="home-contact-content" style={{ display: "flex" }}>
      <Button
        style={{ zIndex: contactMode ? 0 : 999 }}
        onClick={() => setContactMode(!contactMode)}
      >
        Contact me
      </Button>
      <animated.div
        className="home-content-animated"
        style={{ display: "flex", margin: "auto 16px", ...props }}
      >
        <a
          href={contactMode ? "https://github.com/donghakang" : "#"}
          style={{ display: "flex", margin: "auto 16px" }}
        >
          <h4>
            <FaGithub />
          </h4>
        </a>
        <a
          href={contactMode ? "https://facebook.com/dkang0602" : "#"}
          style={{ display: "flex", margin: "auto 16px" }}
        >
          <h4>
            <FaFacebook />
          </h4>
        </a>
        <a
          href={contactMode ? "https://instagram.com/donghakang" : "#"}
          style={{ display: "flex", margin: "auto 16px" }}
        >
          <h4>
            <FaInstagram />
          </h4>
        </a>
        <a
          href={contactMode ? "mailto:dkang0602@gmail.com" : "#"}
          style={{ display: "flex", margin: "auto 16px" }}
        >
          <h4>
            <FiMail />
          </h4>
        </a>
      </animated.div>
    </div>
  );
};

export default function Introduction() {
  return (
    <div className="introduction">
      <div className="introduction-title">
        <h1>Hello World!</h1>
      </div>
      <div className="intro-content">
        <div className="intro-wrapper">
          I am <IntroductionAnimation />
        </div>
        <div className="intro-hide">
          Who wants to become a developer, not a programmer
        </div>
      </div>
      <br />
      <ContactButton />
    </div>
  );
}
