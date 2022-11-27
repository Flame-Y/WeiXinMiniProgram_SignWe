import myAxios from "../http";

export function apiGetChairs() {
  return myAxios({
    url: "/chairs/getAll",
    method: "get",
  });
}