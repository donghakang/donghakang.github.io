import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DescriptionLayer from "./description";
import MacbookLayer from "./MacbookLayer";
import KeyboardLayer from "./KeyboardLayer";
import ExperienceLayer from "./experience";
import SkillLayer from "./skill";
import { blueColor1, blueColor2 } from "../../components/color";
import { IoIosArrowUp } from "react-icons/io";

function AboutParallaxView() {
  const [phoneMode, setPhoneMode] = useState<Boolean>(false);
  const [posY, setPosY] = useState<number>(0);
  const [rotY, setRotY] = useState<number>(0);
  const parallax = useRef<any>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      if (window.innerWidth > 640) {
        setPhoneMode(false);
      } else {
        setPhoneMode(true);
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //TODO: 스크롤에 반응하는 오브젝트를 만들려 했지만 리렌더링 문제 때문에 실패했다...
  // const handleScroll = () => {
  //   if (parallax.current) {
  //     setPosY(parallax.current.current);
  //   }

  //   console.log(posY, parallax.current);
  // };

  // useEffect(() => {
  //   const container = document.querySelector(".my-class-name") as Element;
  //   container.addEventListener("scroll", handleScroll);
  //   return () => {
  //     container.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  //   const tick = () => {
  //     setRotY((rotY + 1) % (365 * 2 * Math.PI));
  //   };

  return (
    <Parallax
      pages={phoneMode ? 3.3 : 3}
      style={{ top: "0", left: "0" }}
      ref={parallax}
      className={"my-class-name"}
    >
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => scroll(1)}
      >
        <DescriptionLayer />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={2}>
        <MacbookLayer rotation={[0, rotY / 365.0, 0]} color={blueColor1} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.5}
        onClick={() => scroll(2)}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ExperienceLayer />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1.0}>
        <KeyboardLayer rotation={[0, rotY / 365.0, 0]} color={blueColor2} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
        }}
        // onClick={() => scroll(0)}
      >
        {phoneMode ? (
          <SkillLayer scrollMagic={() => scroll(0)} />
        ) : (
          <SkillLayer />
        )}
      </ParallaxLayer>

      {phoneMode && (<ParallaxLayer
        offset={2.5}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          // backgroundColor: "blue",
        }}
        // onClick={() => scroll(0)}
      >
        <div
          style={{
            zIndex: 2,
            position: "fixed",
            bottom: "10%",
            right: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            width: "50px",
            height: "50px",
            backgroundColor: "lightgreen",
            cursor: "pointer",
          }}
          onClick={() => scroll(0)}
        >
          <IoIosArrowUp />
        </div>
      </ParallaxLayer>)}
      
    </Parallax>
  );
}

export default AboutParallaxView;
