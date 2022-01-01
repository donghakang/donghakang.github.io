import React, { useState } from "react";
import Layout from "../../components/layout";
// import { useBlogPost, useAllTags, useTagsMenu } from "../../../hooks/useBlogPost";
// import ReactMarkdown from "react-markdown";
import { Navigate, useParams, useLocation } from "react-router-dom";

import * as Styled from "./style/TagView.styled";

import * as server_config from "../../server.config";
import { useTagsMenu } from "../../hooks/useTagsMenu";
import TagNavbar from "./TagNavbar";
import TagTitleView from "./TagTitleView";
import { tagMenuBackground, blueColor1 } from "../../components/color";

export interface TagViewProps {
  data: {
    blog: {
      id: number;
      title: string;
      slug: string;
      filename: string;
      author: string;
      date: string;
      tag: string[];
    }[];
    tag: {
      [key: string]: {
        id: number;
        title: string;
        slug: string;
        filename: string;
        author: string;
        date: string;
        tag: string[];
      }[];
    };
  };
  tabChange: boolean;
  setTabChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServerTagView: React.FC<TagViewProps> = ({
  data,
  tabChange,
  setTabChange,
}) => {
  // const { allData, isLoaded } = useTagsMenu();
  const isLoaded = true;
  return (
    <>
      {isLoaded ? (
        <Styled.TagView tagMenuBackgroundColor={blueColor1} chipColor={"lightblue"}>
          <div className={"tag-wrapper"}>Coming soon...</div>
        </Styled.TagView>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const DevTagView: React.FC<TagViewProps> = ({
  data,
  tabChange,
  setTabChange,
}) => {
  return (
    <>
      <Styled.TagView tagMenuBackgroundColor={tagMenuBackground} chipColor="lightblue">
        <div className={"tag-wrapper"}>
          <TagNavbar
            data={data}
            tabChange={tabChange}
            setTabChange={setTabChange}
          />
          <TagTitleView
            data={data}
            tabChange={tabChange}
            setTabChange={setTabChange}
          />
        </div>
      </Styled.TagView>
    </>
  );
};

function TagView() {
  // const [blogPost, setBlogPost] = useBlogPost();
  // const [allTags, setAllTags] = useAllTags();
  const location = useLocation();

  const [tabChange, setTabChange] = useState(false);
  const data = useTagsMenu();

  // if /blog, redirect to tag=all
  if (!location.search) {
    return <Navigate to="/tag?tag=all" />;
  }

  return (
    <Layout>
      {server_config.USE_BACKEND_SERVER ? (
        <ServerTagView
          data={data}
          tabChange={tabChange}
          setTabChange={setTabChange}
        />
      ) : (
        <DevTagView
          data={data}
          tabChange={tabChange}
          setTabChange={setTabChange}
        />
      )}
    </Layout>
  );
}

export default TagView;
