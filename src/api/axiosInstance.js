import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://cb3d58b4afcd3ceb.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
