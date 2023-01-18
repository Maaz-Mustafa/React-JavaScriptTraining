import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8080" });
const addDelay = (data) =>
  new Promise((res) =>
    setTimeout(() => {
      res(data);
    }, 700)
  );
export const GET = (url, params) => {
  return instance.get(url, { params }).then((res) => addDelay(res.data));
};
export const PATCH = (url, body) => {
  return instance.patch(url, body).then((res) => addDelay(res.data));
};
export const POST = (url, body) => {
  return instance.post(url, body).then((res) => addDelay(res.data));
};
export const DELETE = (url, id) => {
  return instance.delete(url, id).then((res) => addDelay(res.data));
};
