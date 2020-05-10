import DynamoDB from "aws-sdk/clients/dynamodb";
import AWS from "aws-sdk/global";
import { v4 as uuidv4 } from "uuid";
export const addItemtoDB = (e) => {
  AWS.config.credentials.get();
  const title = e.target.title.value;
  const user_id = sessionStorage.getItem("user_id");
  const db = new DynamoDB.DocumentClient();
  const payload = { title, user_id, isActive: true, id: uuidv4() };
  const res = new Promise((resolve, reject) => {
    db.put(
      {
        TableName: "TodoDB",
        Item: {
          user_id,
          todo_list: [],
        },
        ConditionExpression:
          "attribute_not_exists(todo_list) and attribute_not_exists(user_id)",
      },
      (err) => {
        if (err.code !== `ConditionalCheckFailedException`) {
          reject(err);
        } else {
          db.update({
            TableName: "TodoDB",
            Key: {
              user_id,
            },
            UpdateExpression: "set #tl = list_append(#tl, :vals)",
            ExpressionAttributeNames: { "#tl": "todo_list" },
            ExpressionAttributeValues: {
              ":vals": [payload],
            },
          }).promise();
          resolve(payload);
        }
      }
    );
  });

  return res;
};
