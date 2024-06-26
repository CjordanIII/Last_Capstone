try {
  const sessionStorage = sessionStorage.getItem("jwdToken");
} catch (error) {
  console.log(error);
  window.location.href = "http://127.0.0.1:5500/";
}
