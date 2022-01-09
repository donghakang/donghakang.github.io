import React, { useEffect, useState } from "react";
// import TagTitleItem from "./TagTitleItem";
import { useLocation } from "react-router-dom";
import qs from "query-string";

import { Trail } from "../../components/animation";
import { TagViewProps } from "./TagView";
import TagTitleItem from "./TagTitleItem";
/**
 *
 * @param {string} location - current location url address
 * @param {object} data - all data that fetched from api
 */
const TagTitleView: React.FC<TagViewProps> = ({
  data,
  tabChange,
  setTabChange,
}) => {

  const location = useLocation();
  const { tag } = qs.parse(location.search);
  const [sortByTagName, setSortByTagName] = useState<
    {
      id: number;
      title: string;
      slug: string;
      filename: string;
      author: string;
      date: string;
      tag: string[];
    }[]
  >([]);

  useEffect(() => {
    console.log(sortByTagName);
    if (typeof tag === "string") {
      console.log("==>", data, data.tag, tag);
      setSortByTagName(data.tag[tag]);
    } else {
      console.error("tag type has to be string.", typeof tag);
    }
  }, [data, tag]);

  return (
    <div className={"tag-title-view"}>
      <Trail key={String(tabChange)}>
        {sortByTagName.map((blog) => {
          return (
            <TagTitleItem
              key={`blog-${blog.id}`}
              keyValue={blog.id}
              title={blog.title}
              slug={blog.slug}
              author={blog.author}
              date={blog.date}
              tags={blog.tag}
            />
            // <h1 key={`blog-${blog.id}`}>{blog.title}</h1>
          );
        })}
      </Trail>
    </div>
  );
};

export default TagTitleView;
