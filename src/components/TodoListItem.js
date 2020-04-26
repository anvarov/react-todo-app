import React, { useContext } from "react";
import todoContext from "../context/todoContext";
import removeTodo from "../actions/removeTodo";
const TodoListItem = ({ id }) => {
  const { dispatch } = useContext(todoContext);
  return (
    <div>
      <h3>title</h3>
      <button type="submit" onClick={() => console.log("A")}>
        mark complete
      </button>
      <button type="submit" onClick={() => dispatch(removeTodo(id))}>
        remove
      </button>
    </div>
  );
};

export default TodoListItem;
// manga edittodo alohida component kere, osha componentga keyin alohida usestate
// ishalish kere
