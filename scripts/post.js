const sessionStorage = sessionStorage.getItem("jwdToken");
if (sessionStorage === null || undefined) {
  window.location.href = "http://127.0.0.1:5500/";
}
