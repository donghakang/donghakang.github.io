import React, { useEffect } from "react";

// import { useSpring, animated, config } from "react-spring";

import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import * as Styled from "./style/ContactView.styled";
// import { useTrail, a } from "@react-spring/web";

import { Trail, VerticalTrail } from "../../components/animation";

import Layout from "../../components/layout";
import Emoji from "../../components/emoji/Emoji";

function ContactView() {
  return (
    <Layout>
      <Styled.ContactView>
        <div className="contact-content">
          <Trail>
            <h1>Contact me</h1>
            <div>
              <h3>
                Feel free to reach out
                <Emoji label="code" symbol="👨🏻‍💻" />
              </h3>
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
