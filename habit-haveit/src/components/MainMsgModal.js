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
          <p>메세지함에 메세지가 없습니다!</p>
        </div>
        <div className={classes.actions}>
          <Button onClick={() => setModalSwitch(false)}>닫기</Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
