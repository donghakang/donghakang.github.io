import React, { Suspense, useState, useEffect, useRef } from "react";

import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

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

export default ScrollView;
