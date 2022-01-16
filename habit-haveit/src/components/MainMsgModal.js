import React from "react";
import ReactDom from "react-dom";
import classes from "./MainMsgModal.module.css";

export default function MainMsgModal({ setModalSwitch }) {
  return ReactDom.createPortal(
    <div className={classes.ModalBackground}>
      <div className={classes.ModalBox}>
        <div onClick={() => setModalSwitch(false)}>x</div>
        <p>msg today</p>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
