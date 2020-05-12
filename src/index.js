import "core-js/features/promise";
import "regenerator-runtime";
import React, { useReducer, useEffect } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import DashboardPage from "./components/DashboardPage";
import LoginHandler from "./components/LoginHandler";
import TodoContext from "./context/todoContext";
import todoReducer from "./reducers/todoReducer";
import "normalize.css";
import getTodoListFromDB from "./actions/getTodoListFromDB";

const App = () => {
  // let initialState;
  // useEffect(() => {
  //   let isCanceled = false
  //   const fetchTodoListFromDB = async () => {
  //     const res = await getTodoListFromDB();
  //     console.log(res.Item.todo_list);
  //     const todoList = res.Item.todo_list;
  //     const error = res.$response.error || undefined;
  //     if (todoList) {
  //       console.log(todoList, "todolist from index.js");
  //       initialState = { todoList, status: "", error: "" };
  //     } else {
  //       console.log(error);
  //     }
  //   };
  //   fetchTodoListFromDB();
  // }, []);
  const initialState = { todoList: [], status: "success", error: "" };
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
