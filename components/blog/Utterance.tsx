const Utterance = () => {
  console.log("utterence ...");
  return (
    <section
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
