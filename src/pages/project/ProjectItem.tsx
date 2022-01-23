import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ProjectDialog from "./ProjectDialog";
import { StyledProjectItem } from "./style/ProjectItem.styled";

interface ProjectItemProps {
  slug: string;
  item: {
    title: string;
    slug: string;
    link?: string;
    demo?: string[];
    content: { title: string; image: string; data: string };
  };
}
const ProjectItem: React.FC<ProjectItemProps> = ({ slug, item }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledProjectItem
        onClick={handleClickOpen}
        background={`img/${item.content.image}`}
      >
        <div className="image-view"></div>
        <h2 className="image-title">{item.title}</h2>
      </StyledProjectItem>
      <ProjectDialog
        open={open}
        onClose={handleClose}
        content={item.content}
        link={item.link}
        demo={item.demo}
      />
    </>
  );
};

export default ProjectItem;
