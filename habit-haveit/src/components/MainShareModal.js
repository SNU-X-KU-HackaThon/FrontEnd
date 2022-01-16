import React from "react";
import ReactDom from "react-dom";
import classes from "./MainShareModal.module.css";

export default function MainShareModal({ setModalSwitch4 }) {
  return ReactDom.createPortal(
    <div className={classes.ModalBackground}>
      <div className={classes.ModalBox}>
        <div onClick={() => setModalSwitch4(false)}>x</div>
        <p>클립보드에 링크가 복사되었습니다.</p>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}