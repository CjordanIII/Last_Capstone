import { myApp } from "./auth/auth.js";
import { logout, updateUser, userProfile } from "./services/user.js";
import { deleteSech } from "./utils/getuserfromsession.js";
import { handleStorage } from "./utils/utils.js";
window.onload = handleStorage();
const form = document.querySelector("form");
const loggout = document.querySelector("#logout");
const username = form.username;
const bio = form.bio;
const fullName = form.fullName;

async function handleUserProfile() {
  const userProfilevar = await userProfile();

  const user = await userProfilevar.username.split(" ");
  username.value = await user[0];
  bio.value = await userProfilevar.bio;
  fullName.value = await userProfilevar.fullName;
  console.log(userProfilevar);
}

form.addEventListener("submit", (w) => {
  w.preventDefault();

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  const newformObj = { ...formObj, username: formObj.username + " " + myApp };

  async function handleData() {
    const data = await updateUser(newformObj);
  }

  handleData();
});

loggout.addEventListener("click", () => {
  logout();
  deleteSech();
  handleStorage();
});

handleUserProfile();
