import React, { useReducer } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "normalize.css";
import DashboardPage from "./components/DashboardPage";
import LoginHandler from "./components/LoginHandler";
import todoReducer from "./reducers/todoReducer";
import TodoContext from "./context/todoContext";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <Router>
        <LoginHandler path="/logged" />
        <DashboardPage path="/" />
      </Router>
    </TodoContext.Provider>
  );
};
render(<App />, document.getElementById("app"));
