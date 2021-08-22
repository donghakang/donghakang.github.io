import React, { useState, useEffect } from "react";

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Api from "./GithubApi";
import styled from "styled-components";

const ContributionDiv = styled.div`
  display: flex;
  alignitems: center;
  margin: 40px 0;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  .contribution-container {
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
`;

const getWindowWidth = () => {
  return window.innerWidth;
};

const useContribution = () => {
  const [windowX, setWindowX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowX(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowX;
};

const ContributionSVG = () => {
  const github = ["#eeeeee", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
  const { totalContributions } = Api();
  const windowX = useContribution();

  let contributionMargin = 0;

  if (windowX > 1200) {
    contributionMargin = 0;
  } else if (windowX > 992) {
    contributionMargin = 41;
  } else if (windowX > 768) {
    contributionMargin = 265;
  }
  // } else if (contribution)

  return (
    <div className="contribution-container">
      {windowX > 768 ? (
        <svg
          width={14 * 53}
          height={14 * 7}
          style={{ background: "white" }}
          className="contribution-svg"
        >
          {totalContributions.map((contribution, idx) =>
            contribution.map((contrib, index) => {
              let color = "#eeeeee";
              if (contrib.contributionCount >= 4) {
                color = github[4];
              } else {
                color = github[contrib.contributionCount];
              }
              return (
                <OverlayTrigger
                  placement="bottom"
                  key={contrib.date}
                  overlay={
                    <Tooltip id="button-tooltip">
                      {contrib.date}
                      <br />
                      <strong>contribution </strong>:{" "}
                      {contrib.contributionCount}
                    </Tooltip>
                  }
                >
                  <rect
                    x={14 * idx + 1 - contributionMargin}
                    y={14 * index + 1}
                    width={12}
                    height={12}
                    fill={color}
                  />
                </OverlayTrigger>
              );
            })
          )}
        </svg>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const Contribution = () => {
  return (
    <ContributionDiv>
      <h1 style={{ color: "white", width: "300px" }}>
        I actually enjoy coding
      </h1>
      <ContributionSVG />
    </ContributionDiv>
  );
  // return <div>{!isLoading ? (<svg>{contribution}</svg>) : (<span> is .. loading ... </span>)}</div>;
};

export default Contribution;
