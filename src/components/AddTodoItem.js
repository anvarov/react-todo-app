import React, { useState } from "react";
import useDynamoDBHelper from "../hooks/useDynamoDBHelper";
import { addItemtoDB } from "../actions/addItemtoDB";
import addTodo from "../actions/addTodo";

const AddTodoItem = () => {
  const [state, onTodoTitleChange] = useState({ title: "test" });
  const startAddTodo = useDynamoDBHelper(addItemtoDB, addTodo);

  return (
    <form onSubmit={(e) => startAddTodo(e)}>
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
