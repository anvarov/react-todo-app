import DynamoDB from "aws-sdk/clients/dynamodb";
import AWS from "aws-sdk/global";

const removeTodoFroomDB = (param) => {
  AWS.config.credentials.get();
  const id = param;
  const user_id = AWS.config.credentials.identityId;
  const db = new DynamoDB.DocumentClient();
  const res = db
    .get({
      TableName: "TodoDB",
      Key: {
        user_id: user_id,
      },
      ProjectionExpression: "todo_list",
    })
    .promise();
  return res.then((data) => {
    const todoList = data.Item.todo_list;
    const index = todoList.findIndex((todo) => {
      return todo.id === id;
    });
    // console.log(index, "index");
    // const status = !todoList[index].isActive;
    // console.log(status, "from todolistDb");
    return db
      .update({
        TableName: "TodoDB",
        Key: {
          user_id: user_id,
        },
        UpdateExpression: "REMOVE todo_list[" + index + "]",
      })
      .promise()
      .then(() => {
        return Promise.resolve(id);
      });
  });
};
export default removeTodoFroomDB;
