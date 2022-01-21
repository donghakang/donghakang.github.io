import React, { Suspense, useEffect, useState } from "react";
import Layout from "../../components/layout";
// import Loading from "../../components/loading";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useBlogContent } from "../../hooks/useBlogContent";
// import BlogContent from "./BlogContent";
// import TagMenu from "../tag/TagMenu";

import * as Styled from "./style/BlogView.styled";
import Emoji from "../../components/emoji/Emoji";
import { Chip } from "../../components/chip";
import { Scroll } from "../../components/scroll";
import { useTagsMenu } from "../../hooks/useTagsMenu";
import Error from "../../components/404";
import BlogContent from "./BlogContent";
import Loading from "../../components/loading";

function BlogView() {
  const location = useLocation();
  const { slug } = useParams();

  console.log("in blog view", location, slug);

  if (!slug) {
    // Navigate to tags
    return <Navigate to="/tag?tag=all" />;
  }

  const blog = useBlogContent(slug);
  // const { data, isLoaded } = useBlogContent(slug);
  // const [blogLoaded, setBlogLoaded] = useState<boolean>(false);
  // useEffect(() => {
  //   if (!slug) {
  //     // Navigate to tags
  //     return <Navigate to="/tag?tag=all" />;
  //   }

  //   if (blog !== undefined) {
  //     import(`../../data/markdown/${blog.filename}`)
  //       .then((res) => {
  //         fetch(res.default)
  //           .then(() => setBlogLoaded(true))
  //           .catch((err) => console.log(err));
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [slug]);

  // console.log("BLOG LOADER ==> ", blogLoaded);

  return (
    <Layout>
      <Styled.BlogView>
        {blog ? (
          // blogLoaded ? (
          //   <div className={"main"}>
          //     <div className="main-container">
          //       <div className={"title-section"}>
          //         <h1>{blog.title}</h1>
          //         <div className={"title-info"}>
          //           <Emoji label="writer" symbol="👨🏻‍💻" />
          //           <strong>{blog.author}</strong>
          //           <span>{blog.date}</span>
          //           {/* TODO: get tag data */}
          //         </div>
          //         <div className="chip-info">
          //           <Chip tags={blog.tag} />
          //         </div>
          //       </div>
          //       <BlogContent filename={blog.filename} />

          //       <div className={"footer-section"}>
          //         <a href="/tag?tag=all">&lt; Back</a>
          //         <Scroll showBelow={250} />
          //       </div>
          //     </div>
          //   </div>
          // ) : (
          //   <Loading />
          // )
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
