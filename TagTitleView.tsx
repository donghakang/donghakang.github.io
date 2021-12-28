// import React from "react";
// import TagTitleItem from "./TagTitleItem";
// import qs from "query-string";
// import { useLocation } from "react-router-dom";

// import { Trail } from "../../components/animation";
// import { TagChildrenProps } from "./TagView";
// /**
//  *
//  * @param {string} location - current location url address
//  * @param {object} data - all data that fetched from api
//  */
// const TagTitleView: React.FC<TagChildrenProps> = ({
//   data,
//   tabChange,
//   setTabChange,
// }) => {
//   const location = useLocation();
//   const category = qs.parse(location.search);

//   const sortByTagName = data.find(
//     (content) => content.tag.name === category.tag
//   );
//   const sortByLatest = sortByTagName.blog.sort((a, b) => b.id - a.id);

//   return (
//     <div className={"tag-title-view"}>
//       <Trail key={tabChange}>
//         {sortByLatest.map((blog) => (
//           <TagTitleItem
//             key={`blog-${blog.id}`}
//             title={blog.title}
//             slug={blog.slug}
//             writer={blog.writer}
//             date={blog.date}
//             tags={blog.tags}
//           />
//           // <h1 key={`blog-${blog.id}`}>{blog.title}</h1>
//         ))}
//       </Trail>
//     </div>
//   );
// };

// export default TagTitleView;
