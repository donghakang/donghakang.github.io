
import Link from "next/link";
import work from "../../data/work.json";
import { linkStyle, listStyle, projectContainer, ulContainer } from "./style";

export interface ProjectInterface {
  works: {
    frontMatter: any;
    slug: string;
  }[];
}

const Project: React.FC<ProjectInterface> = ({ works }) => {
  console.log(works);
  return (
    <div css={projectContainer}>
      <ul css={ulContainer}>
        {works.map((item: any, index: number) => (
          <li css={listStyle} key={index}>
            <Link href={`project/${item.slug}`}>
              <a css={linkStyle}>{item.frontMatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
