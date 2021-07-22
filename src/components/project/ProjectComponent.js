import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ProjectContent from "./ProjectContent";

export default function ProjectComponent() {
  const { language } = useSelector((state) => state.language);

  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = `/locales/${language ? "en" : "ko"}/project.json`;
    const fetchData = (dir) => {
      fetch(dir)
        .then((res) => res.json())
        .then((res) => setProject(res))
        .then(setIsLoading(false))
        .catch((err) => console.log("cannot fetch a data: ", err));
    };

    fetchData(data);
  }, [language]);

  return (
    <div className="container-fluid mx-0 px-0 project-container">
      <div className="row no-gutters mx-0 px-0 project-row">
        {project.map((item) => (
          <ProjectContent key={item.id} item={item} language={language} />
        ))}
        <div className="col-md-4 project-content" style={{ height: "33vh" }}>
          <h1
            className="project-content-last project-row"
            style={{ color: "darkgray" }}
          >
            More coming soon..
          </h1>
        </div>
      </div>
    </div>
  );
}
