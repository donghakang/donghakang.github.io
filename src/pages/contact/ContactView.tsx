import React, { useEffect } from "react";

// import { useSpring, animated, config } from "react-spring";

import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import * as Styled from "./style/ContactView.styled";
import {
  buttonColor1,
  buttonColor2,
  hoverTextColor,
} from "../../components/color/Color";
// import { useTrail, a } from "@react-spring/web";

import { Trail, VerticalTrail } from "../../components/animation";

import Layout from "../../components/layout";
import Emoji from "../../components/emoji/Emoji";

function ContactView() {
  const color = {
    start: buttonColor1,
    end: buttonColor2,
    text: "white",
    hoverTextColor: hoverTextColor,
  };

  useEffect(() => {}, []);

  return (
    <Layout home>
      <Styled.ContactView theme={color}>
        <div className="contact-content">
          <Trail>
            <h1>Contact me</h1>
            <div>
              <h3>Feel free to reach out<Emoji label="code" symbol="👨🏻‍💻"/></h3>
              <span>피드백과 관심은 저에게 큰 도움이 됩니다🤣</span>
            </div>
          </Trail>
        </div>
        <div className="contact-buttons">
          <VerticalTrail>
            <a href="https://github.com/donghakang">
              <FaGithub />
            </a>
            <a href="https://facebook.com/dkang0602">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/donghakang">
              <FaInstagram />
            </a>
            <a href="mailto:dkang0602@gmail.com">
              <FiMail />
            </a>
          </VerticalTrail>
        </div>
      </Styled.ContactView>
    </Layout>
  );
}

export default ContactView;
