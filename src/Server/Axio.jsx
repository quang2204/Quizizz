import axios from "axios";
import nProgress from "nprogress";
import { store } from "../redux/store";
nProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 600,
  trickleRate: 0.5,
  easing: "ease",
  speed: 200,
  trickle: true,
  trickleRate: 0.02,
  trickleSpeed: 100,
});
const instance = axios.create({
  baseURL: "http://localhost:8081/",
});
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const token = store?.getState()?.user?.user?.access_token;
    config.headers["Authorization"] = "Bearer " + token;
    nProgress.start();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    nProgress.done();
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
