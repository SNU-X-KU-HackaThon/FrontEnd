import React, { useState } from "react";
import ErrorModal from "../src/components/ErrorModal";
import classes from "./signup.module.css";
import Button from "../src/components/Button";
import Link from "next/Link";
import Router, { useRouter } from "next/router";
import { signupApi } from "../src/utils/api";

const userinfo = () => {
  const router = useRouter();

  const userid = router.query.userid;
  const password = router.query.password;
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredgoal, setEnteredgoal] = useState("");
  const [error, setError] = useState();

  const userinfoHandler = async (event, enteredUsername, enteredgoal) => {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredgoal.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "이름과 목표를 모두 입력해주세요.",
      });
    } else {
      const res = await signupApi(
        userid,
        enteredUsername,
        password,
        enteredgoal
      );
      console.log(res);
      const resUserId = res.data.userId;
      //   const createUserInfo = await axios.post();
      Router.push("/main/" + resUserId);
    }
    // props.onAddUser(enteredUserid, enteredpassword, enteredpasswordcheck);
  };

  const usernameChangehandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log(enteredUsername);
  };
  const goalChangehandler = (event) => {
    setEnteredgoal(event.target.value);
    console.log(enteredgoal);
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
      <h2>
        {" "}
        Habit, have it!과 함께 <br /> 나만의 어드벤트 캘린더를 만들어봐요!
      </h2>
      <form onSubmit={(e) => userinfoHandler(e, enteredUsername, enteredgoal)}>
        <label htmlFor="name">당신의 이름은 무엇인가요?</label>
        <input
          id="name"
          type="text"
          onChange={usernameChangehandler}
          value={enteredUsername}
        />
        <label htmlFor="goal">당신의 2월 목표는 무엇인가요?</label>
        <input
          id="goal"
          type="text"
          onChange={goalChangehandler}
          value={enteredgoal}
        />

        <Button type="submit">시작하기</Button>
      </form>
    </div>
  );
};

export default userinfo;
