import React, { Suspense, useState, useEffect, useRef } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import Skill from "./Skill";

function DonghaKang() {
  return (
    <div style={{ margin: "40px" }}>
      <h1 style={{ fontSize: "120px" }}>Dongha Kang</h1>
      <br />
      <span>
        강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.강동하입니다.
      </span>
    </div>
  );
}

function Exposure() {
  return (
    <div className="exposure">
      <ul className="list1">
        <li>Animation</li>
        <li>Computer Vision</li>
        <li>Algorithm</li>
        <li>Data Structure</li>
        <li>Web Development</li>
        <li>Web Design</li>
        <li>Algorithm</li>
        <li>Data Structure</li>
        <li>Web Development</li>
      </ul>
    </div>
  );
}

function Ability() {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <Exposure />
    </div>
  );
}

// function ContactView() {
//   return (

//   );
// }

function ScrollView() {
  return (
    <Suspense fallback={null}>
      <Controller>
        <Scene triggerHook="onLeave" indicators duration={1000} pin>
          {(progress) => (
            <section
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Timeline totalProgress={progress} paused>
                <Tween from={{ scale: "0" }} to={{ scale: "1" }}>
                  <section
                    style={{
                      display: "flex",
                      backgroundColor: "blue",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src="ear.png" alt="ear" />
                    <div>
                      <h1 style={{ backgroundColor: "pink", fontSize: "8vw" }}>
                        Contact me
                      </h1>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <a
                          href="https://github.com/donghakang"
                          style={{ display: "flex", margin: "auto 16px" }}
                        >
                          <h4>
                            <FaGithub />
                          </h4>
                        </a>
                        <a
                          href="https://facebook.com/dkang0602"
                          style={{ display: "flex", margin: "auto 16px" }}
                        >
                          <h4>
                            <FaFacebook />
                          </h4>
                        </a>
                        <a
                          href="https://instagram.com/donghakang"
                          style={{ display: "flex", margin: "auto 16px" }}
                        >
                          <h4>
                            <FaInstagram />
                          </h4>
                        </a>
                        <a
                          href="mailto:dkang0602@gmail.com"
                          style={{ display: "flex", margin: "auto 16px" }}
                        >
                          <h4>
                            <FiMail />
                          </h4>
                        </a>
                      </div>
                    </div>
                  </section>
                </Tween>
              </Timeline>
            </section>
          )}
        </Scene>
      </Controller>
      <section></section>
    </Suspense>
  );
}
function Intro() {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col
            md={8}
            style={{
              backgroundColor: "darkblue",
            }}
          >
            <DonghaKang />
          </Col>
          <Col
            md={4}
            style={{
              padding: 0,
              height: "560px",
            }}
          >
            <Skill />
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            style={{
              height: "560px",
              backgroundImage: "url(IMG_1455.JPG)",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
          ></Col>
          <Col md={8} style={{ backgroundColor: "red", padding: 0 }}>
            <Ability />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              padding: 0,
              backgroundColor: "green",
            }}
          >
            <ScrollView />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Intro;
