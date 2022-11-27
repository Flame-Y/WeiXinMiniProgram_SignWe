import myAxios from "../http";

export function apiGetDoor() {
  return myAxios({
    url: `/door/getStatus`,
    method: "get",
  });
}

export function apiOpen(username) {
  return myAxios({
    url: `/door/open?username=${username}`,
    method: "post",
  });
}

export function apiClose(username) {
  return myAxios({
    url: `/door/close?username=${username}`,
    method: "post",
  });
}



