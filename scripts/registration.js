const form = document.querySelector("form");
import { myApp } from "./auth/auth.js";
import { createUser } from "./services/user.js";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  // appends a uuid to make my user diffrentce between the apps
  const myAppForm = { ...formObj, username: formObj.username + " " + myApp };

  createUser(myAppForm);
});
