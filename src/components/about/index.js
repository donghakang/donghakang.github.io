import React, { useState, useEffect } from "react";

import Header from "../Header";
import { Education, Work, Skill } from "./Info";

import "../../App.scss";

const useFetch = (dir) => {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchEducation = () => {
      fetch("/data/education.json")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setInfo(json);
        })
        .then(setIsLoading(false))
        .catch((err) => {
          console.error("cannot fetch data: " + err);
        });
    };

    fetchEducation();
  }, []);

  return isLoading;
};

export default function About() {
  const isLoading = useFetch("/data/education.json");
  return (
    <>
      {isLoading ? (
        <div> is loading ... </div>
      ) : (
        <>
          <Header />
          <div className="about">
            <Education />
            <Work />
            <Skill />
          </div>
        </>
      )}
    </>
  );
}
