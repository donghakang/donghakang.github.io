import React from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./style/HomeView.styled";

import { headerColor, subheaderColor } from "../../components/color";
import Cannon from "../../components/cannon";
import Layout from "../../components/layout";

const HomeView: React.FC<{}> = (): JSX.Element => {
  // RouteComponentProps is deprecated.
  // useParams will return all the needed data
  const params = useParams();

  return (
    <Layout home>
      <Styled.HomeView>
        {/* <MarbleEffect /> */}
        <Cannon />
        <div className='home-container'>
          <div
            className="main-head"
            style={{
              color: headerColor,
            }}
          >
            DO
            <br />
            NG
            <br />
            HA
            <br />
            KA
            <br />
            NG
          </div>
          <div
            className="sub-head"
            style={{
              color: subheaderColor,
            }}
          >
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
