import React, { useContext, useEffect, useImperativeHandle } from "react";
import TodoListItem from "./TodoListItem";
import AddTodoItem from "./AddTodoItem";
import withFetcher from "../hoc/withFetcher";
import useDynamoDBhelper from "../hooks/useDynamoDBHelper";
import getTodoListFromDB from "../actions/getTodoListFromDB";
import setTodoList from "../actions/setTodoList";
import TodoContext from "../context/todoContext";
// import TodoContext from "../context/todoContext";

const TodoList = () => {
  const startFetchTodo = useDynamoDBhelper(getTodoListFromDB, setTodoList);
  // useEffect(startFetchTodo());
  const { state } = useContext(TodoContext);
  useEffect(() => {
    startFetchTodo();
    console.log(state, "from use effect")
  }, [!state]);

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
      <AddTodoItem status={state.status} />
      {state.todoList[0] ? (
        state.todoList.map(mapTodoList)
      ) : (
        <p className="page--info">No Todos</p>
      )}
    </div>
  );
};

export default TodoList;
