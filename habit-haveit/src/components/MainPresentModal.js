import React from "react";
import ReactDom from "react-dom";
import classes from "./MainPresentModal.module.css";
import Button from "../components/Button";

export default function MainPresentModal({ setModalSwitch2, gift }) {
  return ReactDom.createPortal(
    <div>
      <div
        className={classes.backdrop}
        onClick={() => setModalSwitch2(false)}
      />
      <div className={classes.modal}>
        <div className={classes.content}>
          <p>내 선물함</p>
          <div className={classes.mintbox}>
            <ul>
              {gift.length === 0 ? (
                "아직 받은 선물이 없습니다!"
              ) : (
                <>
                  {gift.map((one) => (
                    <li key={one[1] + one[0]}>
                      {one[1]} from {one[0]}
                    </li>
                  ))}
                </>
              )}
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
