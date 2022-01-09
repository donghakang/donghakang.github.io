import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "query-string";
import { Trail } from "../../components/animation";
import { TagViewProps } from "./TagView";

const TagNavbar: React.FC<TagViewProps> = ({
  data,
  setTabChange,
  tabChange,
}) => {
  const location = useLocation();
  const { tag } = qs.parse(location.search);

  return (
    <nav className={"tag-nav"}>
      <ul>
        <Trail>
          <div className={"tag-nav-title"}>
            <div>태그 목록</div>
            <hr />
          </div>
          {Object.keys(data.tag).map((tags, index) => (
            <li key={`tag-menu-${index}`}>
              <Link
                className={`${tags === tag ? 'selected' : ''}`}
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
