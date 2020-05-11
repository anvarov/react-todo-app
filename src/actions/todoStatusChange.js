export default (param) => {
  const { id } = param.Attributes.todo_list[0];
  return {
    type: "CHANGE_STATUS",
    id,
  };
};
