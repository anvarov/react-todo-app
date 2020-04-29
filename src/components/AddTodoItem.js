import React, { useContext, useState } from "react";
import todoContext from "../context/todoContext";
import addTodo from "../actions/addTodo";

const AddTodoItem = () => {
  const [state, onTodoTitleChange] = useState({ title: "test" });
  const { dispatch } = useContext(todoContext);
  return (
    <form onSubmit={(e) => dispatch(addTodo(e))}>
      <input
        placeholder="this is todo input"
        value={state.title}
        onChange={(e) => onTodoTitleChange({ title: e.target.value })}
        name="title"
      />
      <button type="submit">Submit</button>
      <p>text from input {state.title}</p>
    </form>
  );
};

export default AddTodoItem;
