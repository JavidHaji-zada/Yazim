import axios, { AxiosRequestConfig } from "axios";

// Add a request interceptor
const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(
  // @ts-ignore
  async (config: AxiosRequestConfig) => {
    // @ts-ignore TODO get token from local storage
    // const idToken = await auth().currentUser?.getIdToken();
    // @ts-ignore
    config.headers["Content-Type"] = "application/json";
    // @ts-ignore
    // if (idToken) config.headers.Authorization = idToken;
    return config;
  },
  function (error) {
    // todo: do something with request error
  }
);

export default AxiosInstance;
