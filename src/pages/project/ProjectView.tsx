import React from "react";
import Grid from "@mui/material/Grid";
import { hoverTextColor } from "../../components/color/Color";
// import { useSpring, animated } from "react-spring";
import * as Styled from "./style/ProjectView.styled";
import Layout from "../../components/layout";

import data from "../../data/work.json";

import ProjectItem from "./ProjectItem";

import { useTrail, a } from "@react-spring/web";
import {blueColor1, darkblueColor1 } from '../../components/color'

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

  return (
    <Layout>
      <Styled.ProjectView theme={color}>
        <Trail className={"project-container"}>
          {data.map((item, index) => (
            <ProjectItem key={index} slug={item.slug} item={item} theme={color}/>
          ))}
        </Trail>
      </Styled.ProjectView>
    </Layout>
  );
}

export default ProjectView;
