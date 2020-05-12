import DynamoDB from "aws-sdk/clients/dynamodb";
import AWS from "aws-sdk/global";

const getTodoListFromDB = async () => {
  AWS.config.credentials.get();
  //   const id = param;
  const user_id = AWS.config.credentials.identityId;
  const db = new DynamoDB.DocumentClient();
  const res = await db
    .get({
      TableName: "TodoDB",
      Key: {
        user_id: user_id,
      },
      ProjectionExpression: "todo_list",
    })
    .promise();
  console.log(res, "from get todo list db");
  if (res.$response.error) {
    return Promise.reject(res.$response.error);
  } else {
    return Promise.resolve(res);
  }
};
export default getTodoListFromDB;
