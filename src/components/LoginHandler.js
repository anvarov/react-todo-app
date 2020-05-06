import React from "react";
import AWS from "aws-sdk/global";
import { Redirect, useLocation } from "@reach/router";
import { parse } from "query-string";
import S3 from "aws-sdk/clients/s3";

const LoginHandler = () => {
  const location = useLocation();
  const accessToken = parse(location.hash).id_token;
  console.log(accessToken);
  const params = {
    IdentityPoolId: "us-east-2:63926c50-4f8b-4bcf-9d4c-ab62996caad0",
    Logins: {
      "cognito-idp.us-east-2.amazonaws.com/us-east-2_ZgOgeCHBC": accessToken,
    },
    region: "us-east-2",
  };
  AWS.config.region = "us-east-2";
  AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);
  AWS.config.credentials.get((err) => {
    console.log(err);
  });
  console.log(AWS.config.credentials);
  const s3 = new S3();
  const s3params = {
    Bucket: "examplebucket04272020",
    MaxKeys: 10,
  };
  s3.listObjects(s3params, (err, data) => {
    console.log(data);
  });
  console.log("logged in");
  return <Redirect to="/" noThrow />;
};
export default LoginHandler;
