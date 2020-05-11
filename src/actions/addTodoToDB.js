import DynamoDB from "aws-sdk/clients/dynamodb";
import AWS from "aws-sdk/global";
import { v4 as uuidv4 } from "uuid";
export const addItemtoDB = async (e) => {
  AWS.config.credentials.get();
  const title = e.target.title.value;
  const user_id = sessionStorage.getItem("user_id");
  const db = new DynamoDB.DocumentClient();
  const payload = { title, user_id, isActive: true, id: uuidv4() };
  await db
    .update({
      TableName: "TodoDB",
      Key: {
        user_id,
      },
      UpdateExpression:
        "set todo_list = list_append(if_not_exists(todo_list, :empty_list), :vals)",
      ExpressionAttributeValues: {
        ":vals": [payload],
        ":empty_list": [],
      },
    })
    .promise();
  return payload;
};
