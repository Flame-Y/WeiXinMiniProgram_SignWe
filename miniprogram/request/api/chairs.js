import myAxios from "../http";

export function apiGetAllChairs() {
  return myAxios({
    url: "/chairs/getAll",
    method: "get",
  });
}
export function apiGetChairs(id) {
  return myAxios({
    url: `/chairs/getByChairId/${id}`,
    method: "get",
  });
}
export function apiSignIn(chairId, distance, openid) {
  let data = JSON.stringify({
    "chairId": chairId,
    "distance": distance,
    "openid": openid
  });
  return myAxios({
    url: "/chairs/signIn",
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    data
  });
}
export function apiSignOut(chairId, openid) {
  let data = JSON.stringify({
    "chairId": chairId,
    "openid": openid
  });
  return myAxios({
    url: "/chairs/signOut",
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    data
  });
}