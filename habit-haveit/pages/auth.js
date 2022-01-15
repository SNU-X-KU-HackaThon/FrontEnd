import React from "react";
import Button from "./Button";
import classes from "./auth.module.css";

const auth = (props) => {
  return (
    <div className={classes.auth}>
      <img src="./calendar.png" />
      <h2>
        "Habit, have it!"과 함께 <br /> 나만의 어드벤트 캘린더를 만들어봐요!
      </h2>
      <Button>Have it!</Button>
      <Button>Not Yet</Button>
    </div>
  );
};

export default auth;
