import React, { useState, useEffect } from "react";
import blogData from "../data/blog.config.json";

export const useTagsMenu = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  let sortByTags: {
    [key: string]: {
      id: number;
      title: string;
      slug: string;
      filename: string;
      author: string;
      date: string;
      tag: string[];
    }[];
  } = { all: [] };

  /**
   * Change blog-tag to tag-blog object.
   * Previous:
   * Blog {
   * ...
   * ...
   * tag: [..., ... ]
   * }
   *
   * After this :
   * Tag: [blog... blog...]
   */
  blogData.forEach((blog) => {
    blog.tag.forEach((tag) => {
      // all section
      if (!sortByTags["all"].find((obj) => obj.id === blog.id)) {
        // avoid duplicate
        sortByTags["all"] = [...sortByTags["all"], blog];
      }

      if (sortByTags[tag]) {
        // tag already found,
        sortByTags[tag] = [...sortByTags[tag], blog];
      } else {
        // first tag,
        sortByTags[tag] = [blog];
      }
    });
  });

  return { blog: blogData, tag: sortByTags };
};
