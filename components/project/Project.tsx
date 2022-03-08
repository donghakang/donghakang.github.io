import { css } from "@emotion/react";
import Link from "next/link";
import work from "../../data/work.json";

const Project: React.FC = () => {
  return (
    <div
      css={css`
        margin: 10vh auto;
        max-width: var(--phone-view);
      `}
    >
      {work.map((item, index) => (
        <Link href={`project/3`} key={index}>
          <a>
            <h1 key={index}>{item.title}</h1>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Project;
