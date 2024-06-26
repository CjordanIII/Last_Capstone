import { logUserIn } from "./services/user.js";

const sessionStorage = sessionStorage.getItem("jwdToken");
if (sessionStorage === null || undefined) {
  window.location.href = "http://127.0.0.1:5500/";
}

const form = document.querySelector("form");

form.addEventListener("submit", (w) => {
  w.preventDefault();
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  logUserIn(formObj);
});
