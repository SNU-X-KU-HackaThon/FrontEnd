import Head from "next/head";
import { useEffect, useState } from "react";
import range from "../src/utils/hooks/range";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  getMainInfoApi,
  getMainMsgApi,
  getMonthPresentApi,
} from "../src/utils/api/mainApi";
import classes from "./main.module.css";
import moment from "moment";
import MainMsgModal from "../src/components/MainMsgModal";
import MainPresentModal from "../src/components/MainPresentModal";
import MainShareModal from "../src/components/MainShareModal";
import SendCheerModal from "../src/components/SendCheerModal";
import Button from "../src/components/Button";

export default function Main() {
  const today = moment().format("D");
  const userId = "aaa";
  console.log(today, "today");
  const [modalSwitch, setModalSwitch] = useState(false);
  const [modalSwitch2, setModalSwitch2] = useState(false);
  const [modalSwitch3, setModalSwitch3] = useState(false);
  const [modalSwitch4, setModalSwitch4] = useState(false);
  const isLogin = true;
  const [check, setCheck] = useState(false);
  const data = {
    name: "가영",
    month: 2,
    goal: "2월 잘살기",
    days: {
      1: { msg: 3 },
      4: { msg: 7 },
      19: { msg: 3 },
      22: { msg: 7 },
    },
    doneDates: [1, 2, 5, 6, 7],
    totalNum: 28,
  };
  const [copy, setCopy] = useState(false);

  const { name, month, goal, days, totalNum, doneDates } = data;
  const onClickCheck = () => {
    setCheck(!check);
    console.log(check);
  };
  const onClickToday = async () => {
    console.log("click");
    // const res = await getMainMsgApi(today, userId);
    // console.log(res);
    if (isLogin) setModalSwitch(true);
    console.log(isLogin);
  };
  const onClickPresent = async () => {
    console.log("click");
    // const res = await getMonthPresentApi(userId);
    // console.log(res);
    setModalSwitch2(true);
  };
  const onClickSend = async () => {
    console.log("click");

    setModalSwitch3(true);
  };
  const onClickShare = async () => {
    console.log("click");

    setModalSwitch4(true);
  };
  useEffect(() => {
    // const res = getMainInfoApi("aaa");
    // console.log(res);
  }, []);

  return (
    <>
      <img src={`light.png`} width="380px" style={{ marginTop: "30px", marginLeft:"0px",right: "0px"}} />
      <div className={classes.title}>
        {name} 님의 {month}월 목표
      </div>
      <div className={classes.goal}>{goal}</div>
      <div className={classes.dateCont}>
        {range(1, totalNum).map((idx) => {
          return Number.parseInt(today) > idx ? (
            <div div key={idx}>
              {" "}
              {doneDates.includes(idx) ? (
                <div
                  className={classes.dateWrapper}
                  style={{ position: "relative" }}
                >
                  <div>
                    {" "}
                    <img
                      src={`./openDoors/${idx}.png`}
                      width="40px"
                      height="80px"
                      style={{ opacity: 0.8 }}
                    />
                  </div>
                  <div className={classes.date}>
                    <p>{idx}</p>
                  </div>{" "}
                </div>
              ) : (
                <div
                  className={classes.dateWrapper}
                  style={{ position: "relative" }}
                >
                  <div>
                    {" "}
                    <img
                      src={`./doors/${idx}.png`}
                      width="40px"
                      height="80px"
                      style={{ opacity: 0.2 }}
                    />
                  </div>
                  <div className={classes.date}>
                    <p>{idx}</p>
                  </div>
                </div>
              )}
            </div>
          ) : Number.parseInt(today) === idx ? (
            <div className={classes.dateWrapper} key={idx}>
              {check ? (
                <img
                  className={classes.today}
                  onClick={onClickToday}
                  src={`./openDoors/${idx}.png`}
                  width="40px"
                  height="80px"
                />
              ) : (
                <img src={`./doors/${idx}.png`} width="40px" height="80px" />
              )}

              {days[idx]?.msg && <div>{days[idx]?.msg}</div>}
            </div>
          ) : (
            <div key={idx} className={classes.nextDay}>
              {days[idx]?.msg && <div className={classes.iGotMsg}><img src={`image 402.png`} width="25px" opacity="80%" /><p>{days[idx]?.msg}</p></div>}

              <img src={`./doors/${idx}.png`} width="40px" height="80px" />
            </div>
          );
        })}
      </div>

      {isLogin ? (
        <div className={classes.mainFooter}>
          <div onClick={onClickCheck}>
            {
              check ?  <img src="./checkboxs.png" /> : <img src="./empty.png" />
            }
           </div>
          <CopyToClipboard  text={"copycopytest"} onCopy={() => setCopy(true)}>
            <div onClick={onClickShare}> <img src="./group.png" /></div>
          </CopyToClipboard>
          <div onClick={onClickPresent}><img src="./vector.png" /></div>
        </div>
      ) : (
        <div className={classes.falseFooter}>
          <Button onClick={onClickSend}>응원 보내기</Button>
        </div>
      )}
      {isLogin ? (
        <>
          {modalSwitch ? (
            <MainMsgModal setModalSwitch={setModalSwitch} />
          ) : null}
          {modalSwitch2 ? (
            <MainPresentModal setModalSwitch2={setModalSwitch2} />
          ) : null}
          {modalSwitch4 ? (
            <MainShareModal setModalSwitch4={setModalSwitch4} />
          ) : null}
        </>
      ) : (
        <>
          {modalSwitch3 ? (
            <SendCheerModal setModalSwitch3={setModalSwitch3} />
          ) : null}
        </>
      )}
    </>
  )
}