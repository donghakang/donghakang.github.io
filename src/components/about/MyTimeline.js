import styled from "styled-components";

const TimelineDiv = styled.div`
  position: absolute;

  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  * {
    margin: 0;
    padding: 0;
  }

  .timeline {
    width: 80%;
    height: auto;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }

  .timeline ul {
    list-style: none;
  }

  .timeline ul li {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.background.primary};
    box-shadow: 1px 1px 2px 2px lightgray;
    border-radius: 10px;
    padding: 20px;
  }

  .timeline ul li h3 {
    margin: 0;
  }

  .timeline-content {
    flex-direction: column;
  }
  .timeline-content h3 {
    width: 100%;
    height: 100%;
  }

  .timeline-content .timeline-paragraph {
    font-size: 12px;
    margin: 0;
  }

  .timeline-content .timeline-paragraph span {
    font-style: italic;
    font-family: Didot, serif;
  }

  .timeline ul li:last-child {
    margin-bottom: 0;
  }

  @keyframes expand {
    from {
      display: none;
    }
    to {
      display: block;
    }
  }

  @media only screen and (min-width: 768px) {
    .timeline::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      background-color: gray;
    }
    .timeline ul li {
      margin-left: 42px;
      margin-bottom: 50px;
      position: relative;
    }
    .timeline ul li::after {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      background-color: gray;
      border-radius: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      left: -42px;
    }
    .timeline::after {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: pink;
      transform: translate(-50%, -50%);
    }

    .timeline ul li .timeline-paragraph {
      visibility: hidden;
      height: 0vh;
      opacity: 0;
      transition: height 0.3s, opacity 0.5s;
      margin: 0;
    }

    .timeline ul li:hover .timeline-paragraph {
      visibility: visible;
      height: 80px;
      opacity: 1;
      margin-top: 12px;
    }
  }

  @media only screen and (max-width: 768px) {
    .timeline::before {
      content: "";
      position: absolute;
      height: 100%;
      margin-left: 50%;
      width: 2px;
      background-color: gray;
    }
    .timeline ul li {
      margin-bottom: 50px;
      position: relative;
    }

    .timeline ul li .timeline-paragraph {
      visibility: hidden;
      height: 0vh;
      opacity: 0;
      transition: height 0.3s, opacity 0.5s;
      margin: 0;
    }

    .timeline ul li:hover .timeline-paragraph {
      visibility: visible;
      height: 80px;
      opacity: 1;
      margin-top: 12px;
    }
  }
`;

function MyTimeline() {
  return (
    <TimelineDiv>
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              <h3>Cuyahoga Falls Christian Academy</h3>
              <div className="timeline-paragraph">
                <p>
                  <strong>🚀 On my way to the United States!</strong>.
                  <br />
                  <span>2011-01 ~ 2014-05</span>
                  <p>Graduated high school, located in Akron, Ohio.</p>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3>University of Minnesota - Twin Cities</h3>
              <div className="timeline-paragraph">
                <p>
                  <strong>👨🏻‍💻 I think, I want to be a developer!</strong>.
                  <br />
                  <span>2014-09 ~ 2020-05</span>
                  <p>
                    Graduated with Bachelor of Science, in Computer science.{" "}
                    <br />
                    Specialized in Graphics and Human interaction
                  </p>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3>Web development academy</h3>
              <div className="timeline-paragraph">
                <strong>🤡 But, I never learned Web before ;(</strong>
                <br />
                <span>2020-09 ~ 2021-02</span>
                <p>
                  Attended academy, located in Gangnam, Seoul <br />
                  Learned Java, JSP, Spring Framework, and Android
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3>Seoul National University Hospital</h3>
              <div className="timeline-paragraph">
                <p>
                  <strong>🥸 Whoa, I am crazy about the Frontend</strong>
                  <br />
                  <span>2021-02 ~ Current</span>
                  <p>
                    Work as a researcher in SNUH <br />
                    Used React framework to modify a medical website <br />
                    Used C++ to modify a medical software
                  </p>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </TimelineDiv>
  );
}

export default MyTimeline;
