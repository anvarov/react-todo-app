export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todoList: [...state.todoList, action.todoItem] };
    case "CHANGE_STATUS":
      return {
        ...state,
        todoList: state.todoList.map((todoItem) => {
          if (todoItem.id === action.id) {
            return { ...todoItem, isActive: !todoItem.isActive };
          } else {
            return todoItem;
          }
        }),
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((todoItem) => {
          return todoItem.id !== action.id;
        }),
      };
    case "REQUEST":
      return { ...state, status: "requested" };
    case "SUCCESS":
      return { ...state, status: "success" };
    case "ERROR":
      return { ...state, status: "error", err: action.err };
    default:
      return state;
  }
};
