import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme/theme.js";
import { useSelector } from "react-redux";

// Components
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";

// Style
import { ThemeWrapper } from "./theme/App.css.js";

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
