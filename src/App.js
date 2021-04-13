import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import { history } from "./helpers";
import { Navbar } from "./layouts";
import NotFound from "./pages/NotFound/index";
import MainPage from "./pages/MainPage";
import Bookmark from "./pages/Bookmarked";

function App() {
  return (
    <Router history={history}>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <div className={"app"}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/bookmark" component={Bookmark} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export { App };
