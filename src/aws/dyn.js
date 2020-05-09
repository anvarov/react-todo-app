import DynamoDB from "aws-sdk/clients/dynamodb";
import AWS from "aws-sdk/global";

export const addItemtoDB = () => {
  AWS.config.credentials.get();
  const db = new DynamoDB.DocumentClient();
  console.log(sessionStorage.getItem("user_id"), "from db put");
  db.put({
    TableName: "TodoDB",
    Item: {
      user_id: sessionStorage.getItem("user_id"),
      todo_list: [],
    },
    ConditionExpression: "attribute_not_exists(todo_list) and attribute_not_exists(user_id)",
    // ExpressionAttributeValues: { ":id": "todo_list" },
  })
    .promise()
    .catch((err) => console.log(err, "from put"));
  return db
    .update({
      TableName: "TodoDB",
      Key: {
        user_id: sessionStorage.getItem("user_id"),
      },
      UpdateExpression: "set #tl = list_append(#tl, :vals)",
      ExpressionAttributeNames: { "#tl": "todo_list" },
      ExpressionAttributeValues: {
        ":vals": ["akmla"],
      },
      ReturnValues: "UPDATED_NEW",
    })
    .promise();
};
