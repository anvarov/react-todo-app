import { v4 as uuidv4 } from "uuid";
export default (e) => {
  e.preventDefault();
  return {
    type: "ADD_TODO",
    todoItem: { title: e.target.title.value, isActive: true, id: uuidv4() },
  };
};
