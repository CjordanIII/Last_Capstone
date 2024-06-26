const form = document.querySelector("form");
import { createUser } from "./services/user.js";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  console.log(formObj);
  createUser(formObj);
});
