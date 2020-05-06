import React from "react";
import { useLocation } from "@reach/router";
import CognitoIdentityServiceProvider from "aws-sdk/clients/cognitoidentityserviceprovider";
import { parse } from "query-string";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";

const DashboardPage = (props) => {
 
  return (
    <div className="wrapper">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
};
export default DashboardPage;
