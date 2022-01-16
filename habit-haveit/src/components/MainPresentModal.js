import React from "react";
import ReactDom from "react-dom";
import classes from "./MainPresentModal.module.css";
import Button from "../components/Button"

export default function MainPresentModal({ setModalSwitch2 }) {
  return ReactDom.createPortal(
    <div>
      <div className={classes.backdrop} onClick={() => setModalSwitch2(false)} />
      <div className={classes.modal}>
        <div className={classes.content}>
          <p>내 선물함</p>
          <div className={classes.mintbox}>
            <ul>
              <li>스타벅스 커피 from 가영</li>
              <li>도미노 피자 from 규리</li>
              <li>루피 신상 이모티콘 from 채원</li>
              <li>방어회 1회권 from 성호</li>
            </ul>
          </div>
        </div>
        <div className={classes.actions}>
          <Button onClick={() => setModalSwitch2(false)}>닫기</Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
