import React from "react";
import AWS from "aws-sdk/global";
import { Redirect, useLocation } from "@reach/router";
import { parse } from "query-string";
// import S3 from "aws-sdk/clients/s3";
import { addItemtoDB } from "../aws/dyn";
const LoginHandler = () => {
  const location = useLocation();
  const idToken = parse(location.hash).id_token;
  const accessToken = parse(location.hash).access_token;
  // console.log(idToken);
  const params = {
    IdentityPoolId: "us-east-2:63926c50-4f8b-4bcf-9d4c-ab62996caad0",
    Logins: {
      "cognito-idp.us-east-2.amazonaws.com/us-east-2_ZgOgeCHBC": idToken,
    },
    region: "us-east-2",
  };
  AWS.config.region = "us-east-2";
  AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);
  AWS.config.credentials
    .getPromise()
    .then(() => {
      sessionStorage.setItem("user_id", AWS.config.credentials.identityId);
      addItemtoDB().then((data) => console.log(data));
    })

    .catch((err) => console.log(err));
  // console.log(AWS.config.credentials);
  // const s3 = new S3();
  // const s3params = {
  //   Bucket: "examplebucket04272020",
  //   MaxKeys: 10,
  // };
  // s3.listObjects(s3params, (err, data) => {
  //   console.log(data);
  // // });
  // addItemtoDB()
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
  console.log("logged in");
  return <Redirect to="/" noThrow />;
};
export default LoginHandler;
