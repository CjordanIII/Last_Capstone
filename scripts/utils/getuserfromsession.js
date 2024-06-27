import { myApp } from "../auth/auth.js";

function getuserfromsessionstorage() {
  const includesUUID = sessionStorage.getItem("username").split(" ");

  let username;
  if (includesUUID.includes(myApp)) {
    username = includesUUID[0];
  }

  return username;
}

export { getuserfromsessionstorage };
