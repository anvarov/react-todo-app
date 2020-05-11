import { useContext } from "react";
import TodoContext from "../context/todoContext";
import changeStatusToRequested from "../actions/changeStatusToRequested";
import changeStatusToSuccess from "../actions/changeStatusToSuccess";
import changeStatusToError from "../actions/changeStatusToError";

const useDynamoDBhelper = (callback, action) => {
  const { dispatch } = useContext(TodoContext);
  const handleSubmit = (param = undefined) => {
    // console.log(param, "param");
    // const event = param.persist();
    // console.log(event, "event");

    if (param.type === "submit") param.preventDefault();
    // if (param instanceof Event) param.preventDefault();
    dispatch(changeStatusToRequested());
    // console.log(callback);
    callback(param)
      .then((param) => {
        // console.log(param, "from useDB");
        dispatch(action(param));
        dispatch(changeStatusToSuccess());
      })
      .catch((err) => {
        console.log(err);
        dispatch(changeStatusToError(err));
      });
  };
  return handleSubmit;
};
export default useDynamoDBhelper;
