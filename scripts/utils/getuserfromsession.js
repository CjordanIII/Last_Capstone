import { myApp } from "../auth/auth.js";

function getuserfromsessionstorage() {
  const includesUUID = sessionStorage.getItem("username").split(" ");

  let username;
  if (includesUUID.includes(myApp)) {
    username = includesUUID[0];
  }

  return username;
}
function handleStorageWithUUid() {
  const sessionstorage = sessionStorage.getItem("username");

  return sessionstorage;
}

function getuserfromsessionstorageandupdate(username) {
  const includesUUID = sessionStorage.getItem("username").split(" ");

  if (includesUUID.includes(myApp)) {
    sessionStorage.removeItem("username");
    sessionStorage.setItem("username", username);
  }
}
function deleteSech() {
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("jwdToken");
}
export {
  deleteSech,
  getuserfromsessionstorage,
  getuserfromsessionstorageandupdate,
  handleStorageWithUUid,
};
