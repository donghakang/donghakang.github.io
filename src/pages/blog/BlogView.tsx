import React, { Suspense, useEffect, useState } from "react";
import Layout from "../../components/layout";
// import Loading from "../../components/loading";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useBlogContent } from "../../hooks/useBlogContent";

import * as Styled from "./style/BlogView.styled";
import Emoji from "../../components/emoji/Emoji";
import { Chip } from "../../components/chip";
import { Scroll } from "../../components/scroll";
import Error from "../../components/404";
import BlogContent from "./BlogContent";

function BlogView() {
  const location = useLocation();
  const { slug } = useParams();

  console.log("in blog view", location, slug);

  if (!slug) {
    // Navigate to tags
    return <Navigate to="/tag?tag=all" />;
  }

  const blog = useBlogContent(slug);

  return (
    <Layout>
      <Styled.BlogView>
        {blog ? (
          <div className={"main"}>
            <div className="main-container">
              <div className={"title-section"}>
                <h1>{blog.title}</h1>
                <div className={"title-info"}>
                  <Emoji label="writer" symbol="👨🏻‍💻" />
                  <strong>{blog.author}</strong>
                  <span>{blog.date}</span>
                  {/* TODO: get tag data */}
                </div>
                <div className="chip-info">
                  <Chip tags={blog.tag} />
                </div>
              </div>
              <BlogContent filename={blog.filename} />

              <div className={"footer-section"}>
                <a href="/tag?tag=all">&lt; Back</a>
                <Scroll showBelow={250} />
              </div>
            </div>
          </div>
        ) : (
          <Error />
        )}
      </Styled.BlogView>
    </Layout>
  );
}

export default BlogView;
