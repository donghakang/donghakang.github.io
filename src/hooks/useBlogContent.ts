import React from "react";
import blogData from "../data/blog.config.json";

export const useBlogContent = (
  slug: string
):
  | {
      id: number;
      title: string;
      slug: string;
      filename: string;
      author: string;
      date: string;
      tag: string[];
    }
  | undefined => {
  return blogData.find((blog) => blog.slug === slug);
};
