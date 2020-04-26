import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";

const DashboardPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
};
export default DashboardPage;
