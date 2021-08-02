import { Container, Row, Col } from "react-bootstrap";
import "./Work.css";

function Work() {
  return (
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
  );
}

export default Work;
