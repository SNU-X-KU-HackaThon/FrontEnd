import React from "react";
import Button from "../src/components/Button";
import classes from "./auth.module.css";
import NextLink from "next/Link";

const auth = () => {
  return (
    <div className={classes.auth}>
      <img src="./calendar.png" />

      <div className={classes.buttons}>
        <h2>Habit, Have it!</h2>
        <NextLink href="./login">
          <Button>이미 목표가 있어요!</Button>
        </NextLink>
        <NextLink href="./signup">
          <Button>처음이에요!</Button>
        </NextLink>
      </div>
    </div>
  );
};

export default auth;
