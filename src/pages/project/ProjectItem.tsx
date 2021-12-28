import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { hoverTextColor } from "../../components/color/Color";
import ProjectDialog from "./ProjectDialog";
import { StyledProjectItem } from "./style/ProjectItem.styled";

interface ProjectItemProps {
  slug: string;
  item: {
    title: string;
    slug: string;
    link?: string;
    content: { title: string; image: string; data: string };
  };
  theme: {
    start: string;
    end: string;
    text: string;
    hoverText: string;
  };
}
const ProjectItem: React.FC<ProjectItemProps> = ({ slug, item, theme }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [{ color, transform }, set] = useSpring(() => ({
    color: "white",
    transform: "scale(1.0)",
    delay: 10,
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <animated.div
        onMouseLeave={() => set({ color: "white", transform: "scale(1.0)" })}
        onMouseEnter={() =>
          set({ color: hoverTextColor, transform: "scale(1.1)" })
        }
        onClick={handleClickOpen}
        style={{ transform }}
        className="item"
      >
        <StyledProjectItem
          // as={animated.div}
          // style={{ color }}

          theme={theme}
          background={`img/${item.content.image}`}
        >
          {item.title}
        </StyledProjectItem>
      </animated.div>
      <ProjectDialog open={open} onClose={handleClose} content={item.content} />
    </>
  );
};

export default ProjectItem;
