import React, { useReducer } from "react";
import TodoListItem from "./TodoListItem";
import AddTodoItem from "./AddTodoItem";
import todoContext from "../context/todoContext";
import todoReducer from "../reducers/todoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, [
    {
      id: "1",
      title: "test",
      isActive: true,
    },
    {
      id: "2",
      title: "test1",
      isActive: true,
    },
  ]);

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
    <todoContext.Provider value={{ state, dispatch }}>
      <div className="todo-list">
        {state[0] ? (
          state.map(mapTodoList)
        ) : (
          <p className="page--info">No Todos</p>
        )}
        <AddTodoItem />
      </div>
    </todoContext.Provider>
  );
};

export default TodoList;
