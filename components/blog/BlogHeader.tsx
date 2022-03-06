import { BlogInterface } from "../../pages/blog";

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
    <nav>
      <ul>
        {Object.keys(tagsOnly).map((tag) => (
          <li>
            {tag} ({tagsOnly[tag]})
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogHeader;
