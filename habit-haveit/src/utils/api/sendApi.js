import { axiosInstance } from "./common";
import { API_URLS } from "../../../constants";

const { SEND, COMPLETE } = API_URLS;

export const sendApi = async (
  sender,
  userId,
  sendType,
  letterDate,
  presentType,
  letterContent
) => {
  let data = {};
  if (sendType === "LETTER") {
    data = {
      sender: sender,
      receiver: userId,
      sendType: "LETTER",
      date: Number.parseInt(letterDate),
      content: letterContent,
    };
  } else {
    data = {
      sender: sender,
      receiver: userId,
      sendType: "PRESENT",
      name: presentType,
      month: 2,
    };
  }
  console.log(data);
  return await axiosInstance.post(SEND, data);
};

export const completeApi = async (userId, today, goal) => {
  const data = {
    userid: userId,
    date: Number.parseInt(today),
    goal: goal,
  };
  return await axiosInstance.post(COMPLETE, data);
};
