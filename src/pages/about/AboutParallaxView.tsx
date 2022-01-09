import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DescriptionLayer from "./description";
import MacbookLayer from "./MacbookLayer";
import KeyboardLayer from "./KeyboardLayer";
import ExperienceLayer from "./experience";
import SkillLayer from "./skill";
import { blueColor1, blueColor2 } from "../../components/color";
import { IoIosArrowUp } from "react-icons/io";
import Loading from "../../components/loading";

const AboutParallaxView = () => {
  const [posY, setPosY] = useState<number>(0);
  const [rotY, setRotY] = useState<number>(0);
  const parallax = useRef<any>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

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

  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    // image --> data,
    // data.content.image has Image URL
    const loadImage = (image: string) => {
      return new Promise((resolve, reject) => {
        const loadImage = new Image();
        loadImage.src = image;

        loadImage.onload = () => {
          setTimeout(() => {
            resolve(image);
          }, 0);
        };

        loadImage.onerror = (err) => reject(err);
      });
    };

    loadImage("img/profile.png")
      .then((res) => setImageLoaded(true))
      .catch((err) => console.error("Images cannot be loaded", err));
  }, []);

  return (
    <>
      {imageLoaded ? (
        <Parallax pages={3.3} ref={parallax} className={"my-class-name"}>
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
              height: "120vh",
            }}
          >
            <SkillLayer />
          </ParallaxLayer>
        </Parallax>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AboutParallaxView;
