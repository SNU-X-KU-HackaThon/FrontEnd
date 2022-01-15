import Head from "next/head";
import * as S from "../styles/mainStyle";

export default function Main() {
  const isLogin = true;
  const data = {
    name: "가영",
    month: 2,
    goal: "2월 잘살기",
    days: [
      {
        day: 1,
        msg: 3,
      },
      {
        day: 2,
        msg: 1,
      },
      {
        day: 7,
        msg: 1,
      },
      {
        day: 10,
        msg: 3,
      },
    ],
  };

  const { name, month, goal, days } = data;

  return (
    <>
      <S.Main>
        <>
          <S.Title>
            {name} 님의 {month} 목표는
          </S.Title>
          <S.Goal>{goal}</S.Goal>
          <S.Calendar>
            {days.map((day) => {
              <S.DayCont>
                {day.day}
                {day.msg > 0 && <S.MsgNum>{day.msg}</S.MsgNum>}
              </S.DayCont>;
            })}
          </S.Calendar>
        </>
      </S.Main>
    </>
  );
}
