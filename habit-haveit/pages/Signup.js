import React, { useState } from "react";
import ErrorModal from "../src/components/ErrorModal";
import classes from "./signup.module.css";
import Button from "../src/components/Button";
import Router from "next/router"


const signup = () => {
  const [enteredUserid, setEnteredUserid] = useState("");
  const [enteredpassword, setEnteredpassword] = useState("");
  const [enteredpasswordcheck, setEnteredpasswordcheck] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event,enteredUserid,enteredpassword, enteredpasswordcheck) => {
    event.preventDefault();

    if (
      enteredUserid.trim().length === 0 ||
      enteredpassword.trim().length === 0 ||
      enteredpasswordcheck.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "빈칸을 모두 입력해주세요.",
      });
      return
    }
    if (enteredpassword != enteredpasswordcheck) {
      setError({
        title: "Invalid password",
        message: "비밀번호를 맞게 입력했는지 확인해주세요.",
      });
      return
    }
    Router.push("/userinfo")
    // props.onAddUser(enteredUserid, enteredpassword, enteredpasswordcheck);
    console.log(enteredUserid, enteredpassword, enteredpasswordcheck);
    
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
      <h2>  Habit, have it!과 함께 <br /> 나만의 어드벤트 캘린더를 만들어봐요!</h2>
      <form onSubmit={(e) => addUserHandler(e,enteredUserid,enteredpassword,enteredpasswordcheck)}>
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
