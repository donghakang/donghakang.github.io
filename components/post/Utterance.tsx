import { css } from "@emotion/react";

const Utterance = () => {
  return (
    <section
      css={css`
        margin: 2rem 0;
      `}
      ref={(el) => {
        if (!el) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.crossOrigin = "anonymous";

        scriptElem.setAttribute("repo", "donghakang/donghakang.github.io");
        scriptElem.setAttribute("issue-term", "pathname");
        scriptElem.setAttribute("theme", "github-light");
        scriptElem.setAttribute("label", "blog-comment");
        el.appendChild(scriptElem);
      }}
    />
  );
};

export default Utterance;
