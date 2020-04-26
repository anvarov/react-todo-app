import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "normalize.css";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Router>
      <LoginPage path="/" />
      <DashboardPage path="/dashboard" />
    </Router>
  );
};
render(<App />, document.getElementById("app"));
