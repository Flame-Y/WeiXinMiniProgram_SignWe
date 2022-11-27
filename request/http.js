//http.js
import axios from 'axios'

function myAxios(axiosConfig) {
  const service = axios.create({
    baseURL: "http://8.134.113.149:1989", // 设置统一的请求前缀
    timeout: 10000 // 设置统一的超时时长
  });

  return service(axiosConfig);
}

export function myAxios2(axiosConfig) {
  const service = axios.create({
    baseURL: "http://8.134.113.149:1989", // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长
    // headers: {
    //   token: window.sessionStorage.getItem("token")
    // }
  });

  return service(axiosConfig);
}

export default myAxios;