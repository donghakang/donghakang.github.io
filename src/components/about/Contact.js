import React from "react";
import styled from "styled-components";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactDiv = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

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

  @media only screen and (max-width: 768px) {

    .contact-content {
      display: flex;
      flex-direction: column;
      
    }
    
    .contact-description {
      padding: 20px;
    }

    .contact-description h1{
      font-size: 52px;
    }

    .contact-description p {
      font-size: 14px;
    }
   
    .contact-buttons {
      margin: 32px 20px;
      display: flex;
      justify-content: space-between;

    }
    .contact-buttons a {
      margin: 0;
    }
  }
`;

function Contact({t}) {
  return (
    <ContactDiv>
      <div className="contact-content">
        <div className="contact-description" style={{whiteSpace: 'pre-line'}}>
          <h1>{t("about:contact.title")}</h1>
          <p>
            {t("about:contact.description")}
          </p>
        </div>
        <div className="contact-buttons">
          <a href="https://github.com/donghakang" style={{}}>
            <h4>
              <FaGithub style={{color: 'white'}}/>
            </h4>
          </a>
          <a href="https://facebook.com/dkang0602">
            <h4>
              <FaFacebook style={{color: 'white'}}/>
            </h4>
          </a>
          <a href="https://instagram.com/donghakang" style={{}}>
            <h4>
              <FaInstagram style={{color: 'white'}}/>
            </h4>
          </a>
          <a href="mailto:dkang0602@gmail.com">
            <h4>
              <FiMail style={{color: 'white'}}/>
            </h4>
          </a>
        </div>
      </div>
    </ContactDiv>
  );
}

export default Contact;
