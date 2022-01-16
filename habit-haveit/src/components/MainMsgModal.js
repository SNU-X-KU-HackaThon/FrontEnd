import React from "react";
import ReactDom from "react-dom";
import classes from "./MainMsgModal.module.css";
import Button from "../components/Button"

export default function MainMsgModal({ setModalSwitch }) {
  return ReactDom.createPortal(
    <div>
      <div className={classes.backdrop} onClick={() => setModalSwitch(false)} />
      <div className={classes.modal}>
        <div className={classes.content}>
          <h2>가영님에게서 온 편지</h2>
          <img src='../letter.png'></img>
        </div>
        <div className={classes.actions}>
          <Button>{'<'}</Button>
          <Button className={classes.button} onClick = { () => setModalSwitch(false)}>{'x'}</Button>
          <Button>{'>'}</Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
