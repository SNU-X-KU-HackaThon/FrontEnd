import React from "react";
import Button from "../src/components/Button";
import classes from "./auth.module.css";
import Link from "next/Link";

const auth = () => {
  return (
    <div className={classes.auth}>
      <img src="./calendar.png" />
      <h2>
      
      </h2>
      <div className={classes.buttons}>
        <Link href="./login">
        <Button>이미 목표가 있어요!</Button>
        </ Link>
        <Link href="./signup">
        <Button>처음이에요!</Button>
        </ Link>
      </div>
      </div>
  );
};

export default auth;
