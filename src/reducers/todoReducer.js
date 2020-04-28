export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todoItem];
    case "CHANGE_STATUS":
      return state.map((todoItem) => {
        if (todoItem.id === action.id) {
          return { ...todoItem, isActive: !todoItem.isActive };
        } else {
          return todoItem;
        }
      });
    case "REMOVE_TODO":
      return state.filter((todoItem) => {
        return todoItem.id !== action.id;
      });
    default:
      return state;
  }
};
