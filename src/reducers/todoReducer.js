export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todoItem];
    case "EDIT_TODO":
      state.map((todoItem) => {
        if (todoItem.id === action.todoItem.id) {
          return action.updates;
        } else {
          return todoItem;
        }
      });
      return [...state];
    case "REMOVE_TODO":
      return state.filter((todoItem) => {
        return todoItem.id !== action.id;
      });
    default:
      return state;
  }
};
