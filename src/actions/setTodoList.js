export default (data) => {
  const todoList = data.Item.todo_list;
  return {
    type: "SET_TODOLIST",
    todoList,
  };
};
