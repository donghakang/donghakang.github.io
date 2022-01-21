import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DescriptionLayer from "./description";
import MacbookLayer from "./MacbookLayer";
import KeyboardLayer from "./KeyboardLayer";
import ExperienceLayer from "./experience";
import SkillLayer from "./skill";
import { theme } from "../../components/theme";
import Loading from "../../components/loading";

const AboutParallaxView = () => {
  const [posY, setPosY] = useState<number>(0);
  const [rotY, setRotY] = useState<number>(0);
  const parallax = useRef<any>(null);

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
            }}
          >
            <DescriptionLayer />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={2}>
            <MacbookLayer
              rotation={[0, rotY / 365.0, 0]}
              color={theme.colors.main_blue}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ExperienceLayer />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1.0}>
            <KeyboardLayer
              rotation={[0, rotY / 365.0, 0]}
              color={theme.colors.obj_3}
            />
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
