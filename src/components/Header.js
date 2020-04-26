import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header--title">Todo App</h1>
      <button className="button--logout" type="button">
        Logout
      </button>
    </div>
  );
};

export default Header;
