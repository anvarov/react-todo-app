import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import AddTodoItem from "./AddTodoItem";
import TodoContext from "../context/todoContext";

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const mapTodoList = (todo) => {
    return (
      <TodoListItem
        key={todo.id}
        id={todo.id}
        isActive={todo.isActive}
        title={todo.title}
      />
    );
  };

  return (
    <div className="todo-list">
      {state.todoList[0] ? (
        state.todoList.map(mapTodoList)
      ) : (
        <p className="page--info">No Todos</p>
      )}
      <AddTodoItem />
    </div>
  );
};

export default TodoList;
