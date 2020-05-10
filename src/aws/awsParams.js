/// <reference types="aws-sdk" /
import AWS from "aws-sdk";

AWS.config.region = "us-east-2"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-2:63926c50-4f8b-4bcf-9d4c-ab62996caad0",
});


