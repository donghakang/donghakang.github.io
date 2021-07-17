import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";

import styled, { ThemeProvider } from "styled-components";
import { light, dark } from "./theme/theme.js";
import { useSelector, useDispatch } from "react-redux";

const ThemeWrapper = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.text.primary};
  & a {
    color: ${(props) => props.theme.text.primary};
  }
`;
function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <ThemeWrapper>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
          </Switch>
        </Router>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
