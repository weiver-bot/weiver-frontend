import axios from "axios";

export default axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true
});

export const axiosAuth = axios.create({
  withCredentials: true
});