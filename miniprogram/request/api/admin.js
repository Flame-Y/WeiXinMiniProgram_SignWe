import myAxios from "../http";

export function apiResetRanking(openid) {
  return myAxios({
    url: `admin/resetRanking?openid=${openid}`,
    method: "post",
  });
}

export function apiResetRankingAndRecord(openid) {
  return myAxios({
    url: `admin/resetRankingAndRecord?openid=${openid}`,
    method: "post",
  });
}

export function apiSignOutForce(adminOpenid, chairId, openid) {
  let data = JSON.stringify({
    "chairId": chairId,
    "openid": openid
  });
  return myAxios({
    url: `/signOutForce?adminOpenId=${adminOpenid}`,
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    data
  });
}

export function apiUpdateNotice() {
  let data = JSON.stringify({
    "background": "string",
    "banner": "string",
    "content": "string",
    "font": "string",
    "icon": "string",
    "signOrTime": "string",
    "title": "string"
  });
  return myAxios({
    url: `/updateNotice?openid=${openid}`,
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    data
  });
}



