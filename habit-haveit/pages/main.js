import Head from "next/head";
import { useEffect, useState } from "react";
import range from "../src/utils/hooks/range";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getMainInfoApi, getMainMsgApi } from "../src/utils/api/mainApi";
import moment from "moment";
import MainMsgModal from "../src/components/mainMsgModal";

export default function Main() {
  const today = moment().format("D");
  const userId = "aaa";
  console.log(today, "today");
  const [modalSwitch, setModalSwitch] = useState(false);
  const isLogin = true;
  const [check, setCheck] = useState(false);
  const data = {
    name: "가영",
    month: 2,
    goal: "2월 잘살기",
    days: {
      1: { msg: 3 },
      4: { msg: 7 },
    },
    totalNum: 30,
  };
  const [copy, setCopy] = useState(false);

  const { name, month, goal, days, totalNum } = data;
  const onClickCheck = () => {
    setCheck(!check);
    console.log(check);
  };
  const onClickToday = async () => {
    console.log("click");
    const res = await getMainMsgApi(today, userId);
    console.log(res);
    setModalSwitch(true);
  };
  useEffect(() => {
    const res = getMainInfoApi("aaa");
    console.log(res);
  }, []);

  return (
    <>
      <div>
        {name} 님의 {month} 목표는
      </div>
      <div>{goal}</div>
      <div>
        {range(0, totalNum).map((idx) => {
          return Number.parseInt(today) > idx ? (
            <div>pastday{idx}</div>
          ) : Number.parseInt(today) === idx ? (
            <div key={idx} onClick={() => onClickToday()}>
              {idx}
              {console.log(days[idx]?.msg)}
              {days[idx]?.msg && <div>{days[idx]?.msg}</div>}
            </div>
          ) : (
            <div key={idx}>
              {idx}
              {console.log(days[idx]?.msg)}
              {days[idx]?.msg && <div>{days[idx]?.msg}</div>}
            </div>
          );
        })}
      </div>
      {isLogin ? (
        <div>
          <div onClick={onClickCheck}>{check ? "함" : "안함"}</div>
          <CopyToClipboard text={"copycopytest"} onCopy={() => setCopy(true)}>
            <button>공유</button>
          </CopyToClipboard>
          <div>선물</div>
        </div>
      ) : (
        <button>응원보내기</button>
      )}
      {modalSwitch ? <MainMsgModal setModalSwitch={setModalSwitch} /> : null}
    </>
  );
}
