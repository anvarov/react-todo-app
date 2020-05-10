import React, { useContext } from "react";
import TodoContext from "../context/todoContext";
import removeTodo from "../actions/removeTodo";
import todoStatusChange from "../actions/todoStatusChange";
const TodoListItem = ({ id, isActive, title }) => {
  const { dispatch, state } = useContext(TodoContext);
  return (
    <div>
      <h3>{state.status}</h3>
      <h3>{title}</h3>
      <button type="submit" onClick={() => dispatch(todoStatusChange(id))}>
        {isActive ? "Mark complete" : "Make Active"}
      </button>
      <p>{isActive ? "Active" : "Completed"}</p>
      <button type="submit" onClick={() => dispatch(removeTodo(id))}>
        remove
      </button>
    </div>
  );
};

export default TodoListItem;
// manga edittodo alohida component kere, osha componentga keyin alohida usestate
// ishalish kere
