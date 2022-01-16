import moment from "moment";
import React, { useState } from "react";
import ReactDom from "react-dom";
import range from "../utils/hooks/range";
import Router from "next/router";
import Button from '../components/Button'
import classes from './SendCheerModal.module.css'

export default function SendCheerModal({ setModalSwitch3 }) {
  const [step, setStep] = useState(1);
  const today = moment().format("D");
  const onClickNext = () => {
    if (step === 5) {
      setModalSwitch3(false);
      Router.push("/auth");
    }

    if (step === 3 && sendType === "PRESENT") setStep(step + 2);
    else setStep(step + 1);
  };
  const [input, setInput] = useState({
    sender: "",
    sendType: "LETTER",
    letterDate: today,
    presentType: "카톡임티",
    letterContent: "",
  });
  const { sender, sendType, letterContent, letterDate, presentType } = input;
  const onChange = (e) => {
    const { name, value } = e.target;
    const copy = { ...input };
    copy[name] = value;
    console.log(copy);
    setInput(copy);
  };
  const onClick = (type) => {
    const copy = { ...input };
    copy["sendType"] = type;
    console.log(copy);
    setInput(copy);
  };
  return ReactDom.createPortal(
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.content}>
        {step === 5 && <div onClick={() => setModalSwitch3(false)}>x</div>}
        {step === 1 ? (
          <>
            <p>2월의 응원을 보내시는 분은 누구신가요?</p>
            <input
              type="text"
              onChange={onChange}
              name="sender"
              value={sender}
            />
          </>
        ) : step === 2 ? (
          <>
            <p>2월의 응원 종류를 골라주세요</p>
            <div>
              <p onClick={() => onClick("LETTER")}>편지</p>
              <p onClick={() => onClick("PRESENT")}>선물</p>
            </div>
          </>
        ) : step === 3 ? (
          sendType === "LETTER" ? (
            <>
              <p>편지를 보낼 날짜를 골라주세요</p>
              <select onChange={onChange} name="letterDate">
                {range(today, 28).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <>
              <p>선물을 골라주세요</p>
              <select onChange={onChange} name="presentType">
                {[
                  {
                    item: "카톡임티",
                    key: 0,
                  },
                  {
                    item: "스벅커피",
                    key: 1,
                  },
                  {
                    item: "베라파인트",
                    key: 2,
                  },
                  {
                    item: "직접입력",
                    key: 3,
                  },
                ].map((item) => (
                  <option key={item.key} value={item.item}>
                    {item.item}
                  </option>
                ))}
              </select>
              {!["카톡임티", "스벅커피", "베라파인트"].includes(
                presentType
              ) && (
                <input
                  name="presentType"
                  type="text"
                  onChange={onChange}
                  value={presentType}
                />
              )}
            </>
          )
        ) : step === 4 ? (
          <>
            <p>편지를 작성해주세요</p>
            <input
              type="text"
              onChange={onChange}
              name="letterContent"
              value={letterContent}
            />
          </>
        ) : step === 5 ? (
          <p>
            성공적으로
            {sendType === "LETTER" ? "편지가" : "선물이"}
            전송되었어요!{" "}
          </p>
        ) : null}
        </div>

        <div className={classes.actions}>  
        <Button onClick={onClickNext}>
          {step === 5 ? "나도 만들러 가기" : "다음"}
        </Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
