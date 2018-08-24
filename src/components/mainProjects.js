import React from "react";
import { Switch, Route } from "react-router-dom";
import Tab1HTML from "./tab1Html";
import ReactT from "./react";
import JavaS from "./js";
import Wordpress from "./wordpress";

const MainP = () => (
  <Switch>
    <Route exact path="/projects/html" component={Tab1HTML} />
    <Route path="/projects/js" component={JavaS} />
    <Route path="/projects/react" component={ReactT} />
    <Route path="/projects/wordpress" component={Wordpress} />
  </Switch>
);

export default MainP;
