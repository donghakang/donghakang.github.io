import styled from "styled-components";

const TimelineDiv = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .containers {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
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
    background-color: #1e1f22;
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
`;

function MyTimeline() {
  return (
    <TimelineDiv>
      <div className="containers">
        <div className="timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <h3>Cuyahoga Falls Christian Academy</h3>
                <div className="timeline-paragraph">
                  <p>
                    <h6>🚀 On my way to the United States!</h6>.
                    <span>2011-01 ~ 2014-05</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h3>University of Minnesota - Twin Cities</h3>
                <div className="timeline-paragraph">
                  <p>
                    <h6>👨🏻‍💻 I think, I want to be a developer!</h6>.
                    <span>2014-09 ~ 2020-05</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h3>Web development academy</h3>
                <div className="timeline-paragraph">
                  <h6>🤡 But, I never learned Web before ;(</h6>
                  <span>2020-09 ~ 2021-02</span>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h3>Seoul National University Hospital</h3>
                <div className="timeline-paragraph">
                  <p>
                    <h6>🥸 Whoa, I am crazy about the Frontend</h6>
                    <span>2021-02 ~ Current</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </TimelineDiv>
  );
}

export default MyTimeline;
