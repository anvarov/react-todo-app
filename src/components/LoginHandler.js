import React from "react";
import AWS from "aws-sdk/global";
import { Redirect, useLocation } from "@reach/router";
import { parse } from "query-string";
import CognitoIdentity from "aws-sdk/clients/cognitoidentity";
import PARAMS from "../aws/awsCredentials";

const LoginHandler = () => {
  const location = useLocation();
  const idToken = parse(location.hash).id_token;
  const accessToken = parse(location.hash).access_token;
  console.log(idToken);
  const params = {
    IdentityPoolId: PARAMS.IdentityPoolId,
    Logins: {
      [PARAMS.UserPoolProviderId]: idToken,
    },
    region: PARAMS.region,
  };
  AWS.config.region = PARAMS.region;
  AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);
  AWS.config.credentials.get((err) => {
    console.log(err);
  });
  // console.log(AWS.config.credentials);
  const cognitoidentity = new CognitoIdentity();
  
  cognitoidentity.getId(
    {
      IdentityPoolId: "us-east-2:63926c50-4f8b-4bcf-9d4c-ab62996caad0",
    },
    (err, data) => {
      console.log(data);
    }
  );

  console.log("logged in");
  return <Redirect to="/" noThrow />;
};
export default LoginHandler;
