import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPosts = () => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), "pages", "blog"), {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "pages", "blog", file.name),
        "utf-8"
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, "");
      return { data, content, slug };
    })
    .filter((post) => post);

  if (10) {
    return posts.filter((post, index) => {
      return index + 1 <= 10;
    });
  }

  return posts;
};

const getPost = (pathname: string) => {

};

export { getPost, getPosts };
