import { useState, useEffect } from "react";

const Api = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [totalContributions, setTotalContributions] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const headers = {
    "Content-type": "application/json",
    Authorization: "token " + API_KEY,
  };
  const gql = {
    query: `
  {
    user(login: "donghakang") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              weekday
              date
            }
          }
        }
      }
    }
  }
  `,
  };

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(gql),
      })
        .then((response) => response.json()) //Converting the response to a JSON object
        .then(
          (response) =>
            response.data.user.contributionsCollection.contributionCalendar
        )
        .then((response) => {
          setTotalCount(response.totalContributions);
          return response.weeks;
        })
        .then((res) => {
          let result = [];
          for (let i = 0; i < res.length; i++) {
            result.push(res[i].contributionDays);
          }
          setTotalContributions(result);
        })
        .then((res) => console.log("Success"))
        .catch((error) => console.error(error));
    };

    fetchData();
  }, []);

  return { totalCount, totalContributions };
};

export default Api;
