import axios from "axios";

const instance = axios.create({ baseURL: "https://reqres.in/api" });

export const GET = (url, params) => {
  return instance.get(url, { params }).then((res) => res.data);
};
