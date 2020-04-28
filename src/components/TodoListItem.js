import React, { useContext } from "react";
import todoContext from "../context/todoContext";
import removeTodo from "../actions/removeTodo";
import todoStatusChange from "../actions/todoStatusChange";
const TodoListItem = ({ id, isActive, title }) => {
  const { dispatch } = useContext(todoContext);
  return (
    <div>
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
