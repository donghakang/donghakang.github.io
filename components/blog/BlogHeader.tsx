import Link from "next/link";
import { BlogInterface } from "../../pages/blog";
import { tagButton, tagContainer, tagFlex, tagList } from "./style";

function getAllTags(
  blogs: {
    frontMatter: {
      title: string;
      author: string;
      date: string;
      tag: string[];
    };
    slug: string;
  }[]
) {
  let sortByTags: {
    [key: string]: number;
  } = { all: blogs.length };

  const tagsOnly = blogs.map((blog) => blog.frontMatter.tag);
  tagsOnly.forEach((tags) => {
    tags.forEach((tag) => {
      if (sortByTags[tag]) {
        sortByTags[tag] += 1;
      } else {
        sortByTags[tag] = 1;
      }
    });
  });

  return sortByTags;
}

const BlogHeader: React.FC<BlogInterface> = ({ blogs }) => {
  const tagsOnly = getAllTags(blogs);
  return (
    <nav css={tagContainer}>
      <ul css={tagFlex}>
        {Object.keys(tagsOnly).map((tag) => (
          <Link key={tag} href={`/blog?tag=${tag}`} passHref>
            <li css={tagList}>
              <span>{tag}</span>
              <div className={"badge"}>
                <span>{tagsOnly[tag]}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default BlogHeader;
