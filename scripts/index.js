import { logUserIn } from "./services/user.js";

const form = document.querySelector("form");

form.addEventListener("submit", (w) => {
  w.preventDefault();
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  logUserIn(formObj);
});
