import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";

export default (
    <Switch>
        <Route component={Header} exact path="/" />
        <Route component={Services} path="/Services" />
    </Switch>
);
