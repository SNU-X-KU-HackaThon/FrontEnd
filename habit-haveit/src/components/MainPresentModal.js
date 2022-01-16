import React from "react";
import ReactDom from "react-dom";
import classes from "./MainMsgModal.module.css";

export default function MainPresentModal({ setModalSwitch2 }) {
  return ReactDom.createPortal(
    <div className={classes.ModalBackground}>
      <div className={classes.ModalBox}>
        <div onClick={() => setModalSwitch2(false)}>x</div>
        <p>presentlist</p>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
