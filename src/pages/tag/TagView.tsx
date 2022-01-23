import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import qs from "query-string";
// import { useBlogPost, useAllTags, useTagsMenu } from "../../../hooks/useBlogPost";
// import ReactMarkdown from "react-markdown";
import { Navigate, useParams, useLocation } from "react-router-dom";

import * as Styled from "./style/TagView.styled";

import * as server_config from "../../server.config";
import { useTagsMenu } from "../../hooks/useTagsMenu";
import TagNavbar from "./TagNavbar";
import TagTitleView from "./TagTitleView";

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
  tag: string | undefined;
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
        <Styled.TagView>
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
  tag,
}) => {
  return (
    <>
      <Styled.TagView>
        <div className={"tag-wrapper"}>
          <TagNavbar
            data={data}
            tabChange={tabChange}
            setTabChange={setTabChange}
            tag={tag}
          />
          <TagTitleView
            data={data}
            tabChange={tabChange}
            setTabChange={setTabChange}
            tag={tag}
          />
        </div>
      </Styled.TagView>
    </>
  );
};

function redirectToTagView() {
  return <Navigate to="/tag?tag=all" />;
}

function TagView() {
  // const [blogPost, setBlogPost] = useBlogPost();
  // const [allTags, setAllTags] = useAllTags();
  const [tabChange, setTabChange] = useState(false);
  const location = useLocation();

  const [tag, setTag] = useState<string | undefined>("all"); // location can be undefined when it is wrong.
  const data = useTagsMenu();

  // if /blog, redirect to tag=all
  // "TODO: Does it really re-render even though the page is in different location?"
  if (location.pathname === "/tag" && !location.search) {
    return <Navigate to="/tag?tag=all" />;
  }

  useEffect(() => {
    function tagChange() {
      if (location.pathname === "/tag") {
        // search 가 없을 경우, redirect
        if (!location.search) {
          return redirectToTagView();
        } else {
          const currentTag = qs.parse(location.search).tag as string;
          const getTags = Object.keys(data.tag);

          // 현재 존재하는 태그인지 아닌지 구별한다. 없으면 redirect
          if (!getTags.includes(currentTag)) {
            return redirectToTagView();
          } else {
            setTag(currentTag);
          }
        }
      }
    }
    tagChange();

    return () => {
      tagChange();
    };
  }, []);

  return (
    <Layout>
      {server_config.USE_BACKEND_SERVER ? (
        <ServerTagView
          data={data}
          tabChange={tabChange}
          setTabChange={setTabChange}
          tag={tag}
        />
      ) : (
        <DevTagView
          data={data}
          tabChange={tabChange}
          setTabChange={setTabChange}
          tag={tag}
        />
      )}
    </Layout>
  );
}

export default TagView;
