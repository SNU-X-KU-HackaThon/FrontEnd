import Head from "next/head";
import { useEffect, useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

import classes from "../main.module.css";
import moment from "moment";
import MainMsgModal from "../../src/components/MainMsgModal";
import MainPresentModal from "../../src/components/MainPresentModal";
import SendCheerModal from "../../src/components/SendCheerModal";
import { useRouter } from "next/router";
import range from "../../src/utils/hooks/range";
import { getMainInfoApi } from "../../src/utils/api";

export default function Main() {
  const router = useRouter();
  const userId = String(router.query.userid);
  const today = moment().format("D");
  console.log(today, "today");
  const [modalSwitch, setModalSwitch] = useState(false);
  const [modalSwitch2, setModalSwitch2] = useState(false);
  const [modalSwitch3, setModalSwitch3] = useState(false);
  const isLogin = true;
  const [check, setCheck] = useState(false);
  const [data, setData] = useState({
    name: "가영",
    goal: "2월 잘살기",
    message_list: {
      1: { msg: 3 },
      4: { msg: 7 },
      19: { msg: 3 },
      22: { msg: 7 },
    },
    complete_list: [1, 2, 5, 6, 7],
    total_date: 28,
  });

  const [copy, setCopy] = useState(false);

  const { name, goal, message_list, total_date, complete_list } = data;
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
  const getMainInfo = async (userId) => {
    const res = await getMainInfoApi(userId);
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    if (!router.isReady) return;
    getMainInfo(userId);
  }, [router.isReady]);

  return (
    <>
      <img src={`../light.png`} width="100%" style={{ marginTop: "37px" }} />
      <div className={classes.title}>{name} 님의 2월 목표</div>
      <div className={classes.goal}>{goal}</div>
      <div className={classes.dateCont}>
        {range(1, total_date).map((idx) => {
          return Number.parseInt(today) > idx ? (
            <div div key={idx}>
              {" "}
              {complete_list.includes(idx) ? (
                <div
                  className={classes.dateWrapper}
                  style={{ position: "relative" }}
                >
                  <div>
                    {" "}
                    <img
                      src={`../openDoors/${idx}.png`}
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
                      src={`../doors/${idx}.png`}
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
                  src={`../openDoors/${idx}.png`}
                  width="40px"
                  height="80px"
                />
              ) : (
                <img src={`../doors/${idx}.png`} width="40px" height="80px" />
              )}

              {message_list[idx]?.msg && <div>{message_list[idx]?.msg}</div>}
            </div>
          ) : (
            <div key={idx} className={classes.nextDay}>
              {message_list[idx]?.msg && <p>{message_list[idx]?.msg}</p>}

              <img src={`../doors/${idx}.png`} width="40px" height="80px" />
            </div>
          );
        })}
      </div>

      {isLogin ? (
        <div className={classes.mainFooter}>
          <div onClick={onClickCheck}>{check ? "함" : "안함"}</div>
          <CopyToClipboard text={"copycopytest"} onCopy={() => setCopy(true)}>
            <button>공유</button>
          </CopyToClipboard>
          <div onClick={onClickPresent}>선물</div>
        </div>
      ) : (
        <button onClick={onClickSend}>응원보내기</button>
      )}
      {isLogin ? (
        <>
          {modalSwitch ? (
            <MainMsgModal setModalSwitch={setModalSwitch} />
          ) : null}
          {modalSwitch2 ? (
            <MainPresentModal setModalSwitch2={setModalSwitch2} />
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
  );
}
