import React, { useReducer } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import DashboardPage from "./components/DashboardPage";
import LoginHandler from "./components/LoginHandler";
import TodoContext from "./context/todoContext";
import todoReducer from "./reducers/todoReducer";
import "normalize.css";

const App = () => {
  const initialState = { todoList: [], status: "", error: "" };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ dispatch, state }}>
      <Router>
        <LoginHandler path="/logged" />
        <DashboardPage path="/" />
      </Router>
    </TodoContext.Provider>
  );
};
render(<App />, document.getElementById("app"));
