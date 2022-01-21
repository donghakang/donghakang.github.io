import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./style/HomeView.styled";

import Cannon from "../../components/cannon";
import Layout from "../../components/layout";

const HomeView: React.FC<{}> = (): JSX.Element => {
  // RouteComponentProps is deprecated.
  // useParams will return all the needed data
  // const params = useParams();

  return (
    <Layout home>
      <Styled.HomeView>
        <Cannon />
        <div className="home-container">
          <div className="main-head">
            DONG
            <br />
            HA
            <br />
            KANG
          </div>

          <div className="sub-head">
            There are things that can describe myself, <br /> headphones that I
            listen, keyboards that I smash, and laptop that I abuse. <br />{" "}
            Welcome to my personal space.
          </div>
        </div>
      </Styled.HomeView>
    </Layout>
  );
};

export default HomeView;
