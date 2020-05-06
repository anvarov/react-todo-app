import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header--title">Todo App</h1>
      <button className="button--logout" type="button">
        <a href="https://todoapp04252020.auth.us-east-2.amazoncognito.com/login?client_id=4gtmp3jv2tc1mf4uku4m2pg45f&response_type=token&scope=email+openid&redirect_uri=http://localhost:3000/logged">
          Login
        </a>
      </button>
    </div>
  );
};

export default Header;
