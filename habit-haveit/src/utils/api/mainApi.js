import { axiosInstance } from "./common";
import { API_URLS } from "../../../constants";

const { GET_MAIN_INFO } = API_URLS;

export const getMainInfoApi = async (userId) => {
  const data = {
    userid: "aaa",
  };
  console.log(userId);
  return await axiosInstance.post(GET_MAIN_INFO, data);
};

export const getMainMsgApi = async (today, userid) => {
  const data = {
    userid: "aaa",
    today: "",
  };

  return await axiosInstance.post(GET_MAIN_INFO, data);
};
