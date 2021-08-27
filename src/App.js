import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// redux
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme/theme.js";
import { useSelector, useDispatch } from "react-redux";
import { setScreenMode } from "./redux/screen";

// Components
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";

import Loading from "./components/Loading.js";
// Style
import { ThemeWrapper } from "./theme/App.css.js";

// logic
import useScreenMode from "./logic/useScreenMode.js";

function App() {
  const { theme } = useSelector((state) => state.theme);
  const screenMode = useScreenMode();
  const dispatch = useDispatch();
  dispatch(setScreenMode(screenMode));

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <Suspense fallback={ <Loading text="D O N G H A K A N G" theme={theme}/>}>

      
      <ThemeWrapper>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
          </Switch>
        </Router>
      </ThemeWrapper>
      </Suspense>
    </ThemeProvider>
    
  );
}

export default App;
