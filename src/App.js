import "./App.scss";
import Shop from "./components/Shop";
import Home from "./components/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
