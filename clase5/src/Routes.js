import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import PostIndividual from "./Components/PostIndividual";
import Posts from "./Components/Posts/Posts";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/posts/:idDeMiPost" component={PostIndividual} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
