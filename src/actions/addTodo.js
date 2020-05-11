export default ({ title, isActive, user_id, id }) => {
  return {
    type: "ADD_TODO",
    todoItem: { title, isActive, id, user_id },
  };
};
