import React from "react";
import styled from "styled-components";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactDiv = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: lightgreen;

  .contact-content {
    display: flex;
  }

  .contact-description {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    font-size: 80px;
  }

  a {
    display: flex;
    margin: auto 16px;
    background-color: #111111;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    margin: 16px 32px;
  }
`;

function Contact() {
  return (
    <ContactDiv>
      <div className="contact-content">
        <div className="contact-description">
          <h1>Contact me</h1>
          <p>
            I am waiting for bigger developer community. I really want to work
            together!
          </p>
        </div>
        <div>
          <a href="https://github.com/donghakang" style={{}}>
            <h4>
              <FaGithub />
            </h4>
          </a>
          <a href="https://facebook.com/dkang0602">
            <h4>
              <FaFacebook />
            </h4>
          </a>
          <a href="https://instagram.com/donghakang" style={{}}>
            <h4>
              <FaInstagram />
            </h4>
          </a>
          <a href="mailto:dkang0602@gmail.com">
            <h4>
              <FiMail />
            </h4>
          </a>
        </div>
      </div>
    </ContactDiv>
  );
}

export default Contact;
