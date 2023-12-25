import React from "react";

function Login() {
  return (
    <>
      <form action="get">
        <legend>login</legend>
        <label htmlFor="firstName">
          <p>First Name</p>
        </label>
        <input type="text" id="firstName" />
        <label htmlFor="lastName">
          <p>Last Name</p>
        </label>
        <input type="text" id="lastName" />
        <label htmlFor="email">
          <p>Email</p>
        </label>
        <input type="email" id="email" placeholder="example@email.com" />
        <label htmlFor="password">
          <p>Password</p>
        </label>
        <input type="password" id="password" />
        <label htmlFor="confirmPassword">
          <p>Confirm Password</p>
        </label>
        <input type="password" id="confirmPassword" />
      </form>
    </>
  );
}

export default Login;
