import myAxios from "../http";

export function apiGetRanking() {
  return myAxios({
    url: `/ranking/get`,
    method: "get",
  });
}




