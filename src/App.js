import React, { useState } from "react";
import Team from "./components/Team/Team";
import "./App.css";
import SingleTeam from "./components/TeamDetails/TeamDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const value = JSON.parse(localStorage.getItem("team")) || "";
  const [teamName] = useState(value);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Team} />
          <Route
            exact
            path={
              teamName
                ? `/singleTeam/${teamName.team.strTeam}`
                : `/singleTeam/${teamName.team.strTeam}`
            }
            component={SingleTeam}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
