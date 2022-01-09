import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { hoverTextColor } from "../../components/color/Color";
// import { useSpring, animated } from "react-spring";
import * as Styled from "./style/ProjectView.styled";
import Layout from "../../components/layout";

import data from "../../data/work.json";

import ProjectItem from "./ProjectItem";
import Loading from "../../components/loading";

import { useTrail, a } from "@react-spring/web";
import { blueColor1, darkblueColor1 } from "../../components/color";

const Trail: React.FC<{ children: React.ReactNode; className: string }> = ({
  children,
  className,
}) => {
  const horizontalTrail = {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { opacity: 0, scale: 0.3 },
    to: { opacity: 1, scale: 1 },
  };

  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, horizontalTrail);

  return (
    <div className={className}>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </div>
  );
};

function ProjectView() {
  const color = {
    start: blueColor1,
    end: darkblueColor1,
    text: "white",
    hoverText: hoverTextColor,
  };

  const [imagesLoaded, setimagesLoaded] = useState<boolean>(false);
  useEffect(() => {
    // image --> data,
    // data.content.image has Image URL
    const loadImage = (data: {
      title: string;
      slug: string;
      link?: string;
      demo?: string[];
      content: { title: string; image: string; data: string };
    }) => {
      const image = data.content.image;
      return new Promise((resolve, reject) => {
        const loadImage = new Image();
        loadImage.src = `img/${image}`;

        loadImage.onload = () => {
          setTimeout(() => {
            resolve(`img/${image}`);
          }, 0);
        };

        loadImage.onerror = (err) => reject(err);
      });
    };

    Promise.all(data.map((image) => loadImage(image)))
      .then((res) => setimagesLoaded(true))
      .catch((err) => console.error("Images cannot be loaded", err));
  }, []);

  return (
    <Layout>
      <Styled.ProjectView theme={color}>
        {imagesLoaded ? (
          <Trail className={"project-container"}>
            {data.map((item, index) => (
              <ProjectItem
                key={index}
                slug={item.slug}
                item={item}
                theme={color}
              />
            ))}
          </Trail>
        ) : (
          <Loading />
        )}
      </Styled.ProjectView>
    </Layout>
  );
}

export default ProjectView;
