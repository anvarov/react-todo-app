import DynamoDB from "aws-sdk/clients/dynamodb";
import AWS from "aws-sdk/global";

const changeTodoStatusOnDB = (param) => {
  AWS.config.credentials.get();
  const id = param;
  const user_id = sessionStorage.getItem("user_id");
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
    console.log(index, "index");
    const status = !todoList[index].isActive;
    console.log(status, "from todolistDb");
    return db
      .update({
        TableName: "TodoDB",
        Key: {
          user_id: user_id,
        },
        UpdateExpression:
          "set #tl[" +
          index +
          "].isActive = :status, #tl[" +
          index +
          "].id = :id",
        ExpressionAttributeNames: {
          "#tl": "todo_list",
          // "#index": `[${index}]`,
          // "#isActive": "isActive",
        },
        ExpressionAttributeValues: {
          ":status": status,
          ":id": id,
        },
        ReturnValues: "UPDATED_NEW",
      })
      .promise();
  });
};
export default changeTodoStatusOnDB;
