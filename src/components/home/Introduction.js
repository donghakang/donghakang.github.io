import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useSpring, animated } from "react-spring";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const IntroductionAnimation = (props) => {
  const { t } = props;
  return (
    <div style={{ marginLeft: "4px" }} className="animated-text">
      <div className="animated-text-desc">👨🏻‍💻 {t("home:status.1")}</div>
      <div className="animated-text-desc">🧑🏻‍🎨 {t("home:status.2")}</div>
      <div className="animated-text-desc">👨🏻‍🔬 {t("home:status.3")}</div>
      <div className="animated-text-desc">👨🏻‍💻 {t("home:status.1")}</div>
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
  const { t, i18n } = useTranslation(["home"]);
  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    console.log("hello");
    function handleChangeLanguage() {
      i18n.changeLanguage(language ? "en" : "ko");
    }

    handleChangeLanguage();
  }, [language]);
  return (
    <div className="introduction">
      <div className="introduction-title">
        <h1>{t("home:main")}</h1>
      </div>
      <div className="intro-content">
        <div className="intro-wrapper">
          {t("home:submain1")}
          <IntroductionAnimation t={t} i18n={i18n} />
          {t("home:submain2")}
        </div>
        <div className="intro-hide">{t("home:description")}</div>
      </div>
      <br />
      <ContactButton />
    </div>
  );
}

export { ContactButton };
