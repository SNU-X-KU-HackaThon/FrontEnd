import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import classes from "./Signup.module.css";
import Button from "./Button";

const signup = () => {
  const [enteredUserid, setEnteredUserid] = useState("");
  const [enteredpassword, setEnteredpassword] = useState("");
  const [enteredpasswordcheck, setEnteredpasswordcheck] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserid.trim().length === 0 ||
      enteredpassword.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "아이디와 비밀번호를 입력해주세요.",
      });
    }
    if (enteredpassword != enteredpasswordcheck) {
      setError({
        title: "Invalid password",
        message: "비밀번호를 맞게 입력했는지 확인해주세요.",
      });
    }
    // props.onAddUser(enteredUserid, enteredpassword, enteredpasswordcheck);
    console.log(enteredUserid, enteredpassword, enteredpasswordcheck);
    setEnteredUserid("");
    setEnteredpassword("");
    setEnteredpasswordcheck("");
  };
  const useridChangehandler = (event) => {
    setEnteredUserid(event.target.value);
  };
  const passwordChangehandler = (event) => {
    setEnteredpassword(event.target.value);
  };
  const passwordcheckChangehandler = (event) => {
    setEnteredpasswordcheck(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className={classes.input}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={addUserHandler}>
        <label htmlFor="id">아이디</label>
        <input
          id="id"
          type="text"
          onChange={useridChangehandler}
          value={enteredUserid}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          onChange={passwordChangehandler}
          value={enteredpassword}
        />
        <label htmlFor="passwordcheck">비밀번호 확인</label>
        <input
          id="passwordcheck"
          type="password"
          onChange={passwordcheckChangehandler}
          value={enteredpasswordcheck}
        />
        <Button type="submit">생성하기</Button>
      </form>
    </div>
  );
};

export default signup;
