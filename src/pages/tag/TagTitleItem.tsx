import React from "react";
import { Link } from "react-router-dom";

export const TagChip: React.FC<{ tags: string[] }> = ({ tags }) => {
  const renderTags = tags.map((tag, index) => (
    <span key={index} className="tag-chip">
      {tag}
    </span>
  ));

  return <div className={"tag-chip-wrapper"}>{renderTags}</div>;
};

interface blogProps {
  keyValue: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  tags: string[];
}

const TagTitleItem: React.FC<blogProps> = ({
  keyValue,
  slug,
  title,
  author,
  date,
  tags,
}) => {
  // const location = useLocation();

  return (
    //   TODO: Fix this with styled-components
    //         Change the link

    <Link to={`/blog/${slug}`}>
      <div className={"tag-title-item"}>
        <h1>{title}</h1>
        <p>{date}</p>
        <TagChip tags={tags} />
      </div>
    </Link>
  );
};

export default TagTitleItem;
