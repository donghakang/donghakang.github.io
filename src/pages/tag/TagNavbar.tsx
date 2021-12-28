import React from "react";
import { Link } from "react-router-dom";
import { Trail } from "../../components/animation";
import { TagViewProps } from "./TagView";

const TagNavbar: React.FC<TagViewProps> = ({
  data,
  setTabChange,
  tabChange,
}) => {
  return (
    <nav className={"tag-nav"}>
      <ul>
        <Trail>
          {Object.keys(data.tag).map((tags, index) => (
            <li key={`tag-menu-${index}`}>
              <Link
                to={`?tag=${tags}`}
                onClick={() => setTabChange(!tabChange)}
              >
                {tags} <span>({data.tag[tags].length})</span>
              </Link>
            </li>
          ))}
        </Trail>
      </ul>
    </nav>
  );
};

export default TagNavbar;
