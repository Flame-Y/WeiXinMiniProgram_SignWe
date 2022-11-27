import myAxios from "../http";

export function apiGetYesterdayRecord() {
  return myAxios({
    url: `/yesterdayRecord/get`,
    method: "get",
  });
}




