import axios from "axios";

function withoutAuth() {
  return axios.create({
    baseURL: process.env.API_ENDPOINT,
  });
}

export const axiosInstance = withoutAuth();
