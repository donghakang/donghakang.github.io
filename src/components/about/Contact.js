import React from "react";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Contact() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: "80px" }}>Contact me</h1>
          <p>
            I am waiting for bigger developer community. I really want to work
            together!
          </p>
        </div>
        <div>
          <a
            href="https://github.com/donghakang"
            style={{
              display: "flex",
              margin: "auto 16px",
              width: "60px",
              height: "60px",
              borderRadius: "30px",
              backgroundColor: "#111111",
              alignItems: "center",
              justifyContent: "center",
              margin: "16px 32px",
            }}
          >
            <h4>
              <FaGithub />
            </h4>
          </a>
          <a
            href="https://facebook.com/dkang0602"
            style={{
              display: "flex",
              margin: "auto 16px",
              backgroundColor: "#111111",
              width: "60px",
              height: "60px",
              borderRadius: "30px",
              alignItems: "center",
              justifyContent: "center",
              margin: "16px 32px",
            }}
          >
            <h4>
              <FaFacebook />
            </h4>
          </a>
          <a
            href="https://instagram.com/donghakang"
            style={{
              display: "flex",
              margin: "auto 16px",
              backgroundColor: "#111111",
              width: "60px",
              height: "60px",
              borderRadius: "30px",
              alignItems: "center",
              justifyContent: "center",
              margin: "16px 32px",
            }}
          >
            <h4>
              <FaInstagram />
            </h4>
          </a>
          <a
            href="mailto:dkang0602@gmail.com"
            style={{
              display: "flex",
              margin: "auto 16px",
              backgroundColor: "#111111",
              width: "60px",
              height: "60px",
              borderRadius: "30px",
              alignItems: "center",
              margin: "16px 32px",
              justifyContent: "center",
            }}
          >
            <h4>
              <FiMail />
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
