import myAxios from "../http";

export function apiGetUser(openid) {
  return myAxios({
    url: '/user/checkUser',
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    data: openid
  });
}

export function apiRegister(classname,name,openid) {
  let data = JSON.stringify({
    "classname": classname,
    "name": name,
    "openid": openid
  });
  return myAxios({
    url: '/user/register',
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    data
  });
}



