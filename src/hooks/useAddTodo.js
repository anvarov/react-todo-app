import { useContext } from "react";
import TodoContext from "../context/todoContext";
import changeStatusToRequested from "../actions/changeStatusToRequested";
import changeStatusToSuccess from "../actions/changeStatusToSuccess";
import changeStatusToError from "../actions/changeStatusToError";

const useDynamoDBhelper = (callback, action) => {
  const { dispatch } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeStatusToRequested());
    console.log(callback);
    callback(e)
      .then((e) => {
        dispatch(changeStatusToSuccess());
        dispatch(action(e));
      })
      .catch((err) => dispatch(changeStatusToError(err)));
  };
  return handleSubmit;
};
export default useDynamoDBhelper;
