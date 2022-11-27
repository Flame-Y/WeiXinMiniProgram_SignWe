import myAxios from "../http";

export function apiGetUserRecord(username) {
  return myAxios({
    url: `/record/getByUserId/${username}`,
    method: "get",
  });
}




