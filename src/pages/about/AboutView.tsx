import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DescriptionLayer from "./description";
import MacbookLayer from "./material/MacbookLayer";
import KeyboardLayer from "./material/KeyboardLayer";
import ExperienceLayer from "./experience";
import SkillLayer from "./skill";
import { theme } from "../../assets/theme";
import Loading from "../../components/loading";
import * as Styled from "./style";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Layout from "../../components/layout";

const AboutView = () => {
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

  const { scrollY, scrollYProgress } = useViewportScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 900, 1800],
    ["#ffffff", "#1e90ff", "#ff8d1e"]
  );

  const [y, setY] = useState(0);
  const y1 = useTransform(scrollY, [0, 1300], [100, 1000]);
  const y2 = useTransform(scrollY, [1200, 2000], [1500, 2300]);

  scrollY.onChange((y) => {
    setY(y);
  });

  return (
    <Layout>
      {imageLoaded ? (
        <Styled.AboutView style={{ backgroundColor: backgroundColor }}>
          <DescriptionLayer />
          <motion.div className="material" style={{ x: "50vw", y: y1 }}>
            <MacbookLayer
              style={{ width: "500px", height: "500px" }}
              rotation={[
                131 / (100 * Math.PI),
                y / (100 * Math.PI),
                131 / (100 * Math.PI),
              ]}
              color={"#1e90ff"}
            />
          </motion.div>
          <motion.div className="material" style={{ y: y2 }}>
            <KeyboardLayer
              style={{ width: "500px", height: "500px" }}
              rotation={[
                131 / (100 * Math.PI),
                -y / (130 * Math.PI),
                131 / (100 * Math.PI),
              ]}
              color={"#ff8800"}
            />
          </motion.div>
          <ExperienceLayer />
          <SkillLayer />
        </Styled.AboutView>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default AboutView;
