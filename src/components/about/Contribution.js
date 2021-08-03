import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Api from "./GithubApi";

const ContributionSVG = () => {
  const github = ["#eeeeee", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
  const { totalCount, totalContributions } = Api();
  console.log(totalCount, totalContributions);
  return (
    <svg
      width={14 * 53}
      height={14 * 7}
      style={{ background: "white", margin: "auto" }}
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
              overlay={
                <Tooltip id="button-tooltip">
                  {contrib.date}
                  <br />
                  <strong>contribution </strong>: {contrib.contributionCount}
                </Tooltip>
              }
            >
              <rect
                x={14 * idx + 1}
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
  );
};

const Contribution = () => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        display: "flex",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <h1>I actually enjoy coding</h1>
      <ContributionSVG />
    </div>
  );
  // return <div>{!isLoading ? (<svg>{contribution}</svg>) : (<span> is .. loading ... </span>)}</div>;
};

export default Contribution;
