import { useContext } from "react";
import TodoContext from "../context/todoContext";
import changeStatusToRequested from "../actions/changeStatusToRequested";
import changeStatusToSuccess from "../actions/changeStatusToSuccess";
import changeStatusToError from "../actions/changeStatusToError";

const useDynamoDBhelper = (callback, action) => {
  const { dispatch } = useContext(TodoContext);
  const handleAction = (param = undefined) => {

    if (param && param.type === "submit") param.preventDefault();
    // if (param instanceof Event) param.preventDefault();
    dispatch(changeStatusToRequested());
    // console.log(callback);
    callback(param)
      .then((res) => {
        // console.log(param, "from useDB");
        dispatch(action(res));
        dispatch(changeStatusToSuccess());
      })
      .catch((err) => {
        console.log(err, "from dynamodb helper");
        dispatch(changeStatusToError(err));
      });
  };
  return handleAction;
};
export default useDynamoDBhelper;
