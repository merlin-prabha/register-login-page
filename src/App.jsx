import React from "react";
import { useState } from "react";

import CustomButton from "./components/custom/CustomButton";
import CustomInput from "./components/custom/CustomInput";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReENteredPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [page, setPage] = useState("Register");
  const [success, setSuccess] = useState(false);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeReEnteredPassword = (e) => {
    setReENteredPassword(e.target.value);
  };

  const onClickRegister = (e) => {
    e.preventDefault();
    if (reEnteredPassword !== password) {
      setIsPasswordCorrect(true);
    }
  };

  const onClickShowLogin = () => {
    setPage("Login");
  };

  const onClickLogin = () => {
    setSuccess(true);
  };

  const renderRegisterPage = () => {
    console.log(page);
    return (
      <div className="main-container">
        <h1 className="heading">Register Form</h1>
        <form className="form-container" onSubmit={onClickRegister}>
          <CustomInput
            label="USERNAME"
            value={username}
            placeholder="Enter Username"
            onChange={onChangeUsername}
          />
          <CustomInput
            label="PASSWORD"
            value={password}
            placeholder="Enter Password"
            onChange={onChangePassword}
          />
          <CustomInput
            label="CONFIRM PASSWORD"
            value={reEnteredPassword}
            placeholder="Enter Password Again"
            onChange={onChangeReEnteredPassword}
          />
          {isPasswordCorrect && <p className="error">Enter Correct Password</p>}
          <CustomButton button={"REGISTER"} type="submit" />
        </form>
        <div>
          <p>Already have an account? Log in here</p>
          <CustomButton
            button={"SHOW LOGIN PAGE"}
            type="button"
            onClick={onClickShowLogin}
          />
        </div>
      </div>
    );
  };

  const renderLoginPage = () => {
    console.log(page);
    return (
      <div>
        <h1 className="heading">Login Form</h1>
        <form className="form-container" onSubmit={onClickLogin}>
          <CustomInput
            label="USERNAME"
            value={username}
            placeholder="Enter Username"
            onChange={onChangeUsername}
          />
          <CustomInput
            label="PASSWORD"
            value={password}
            placeholder="Enter Password"
            onChange={onChangePassword}
          />

          <CustomButton button={"LOGIN"} />
        </form>
        {success && <p>Login successful! Welcome back!!</p>}
      </div>
    );
  };

  return (
    <div>{page === "Register" ? renderRegisterPage() : renderLoginPage()}</div>
  );
};

export default App;
