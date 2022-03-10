import React from "react";

import * as Styled from "./style";

const Chip: React.FC<{ tags: string[] }> = ({ tags }) => {
  const renderTags = tags.map((tag, index) => (
    <span key={index} className="tag-chip">
      {tag}
    </span>
  ));

  return <Styled.Chip className={"tag-chip-wrapper"}>{renderTags}</Styled.Chip>;
};

export default Chip;
