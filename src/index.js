import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "normalize.css";
import DashboardPage from "./components/DashboardPage";
import LoginHandler from "./components/LoginHandler";

const App = () => {
  return (
    <Router>
      <LoginHandler path="/logged" />
      <DashboardPage path="/" />
    </Router>
  );
};
render(<App />, document.getElementById("app"));
