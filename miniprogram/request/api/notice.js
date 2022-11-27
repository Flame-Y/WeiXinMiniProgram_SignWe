import myAxios from "../http";

export function apiGetNotice() {
  return myAxios({
    url: `/notice/getNotice`,
    method: "get",
  });
}




