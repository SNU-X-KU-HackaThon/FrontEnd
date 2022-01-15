import React from "react";
import ReactDom from "react-dom";
import classes from "./MainMsgModal.module.css";

export default function MainMsgModal({}) {
  return ReactDom.createPortal(
    <div className={classes.ModalBackground}>
      <div className={classes.ModalBox}>hihihihihihihihi</div>
    </div>,
    document.getElementById("modal-root")
  );
}
