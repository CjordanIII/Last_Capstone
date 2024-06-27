async function handleStorage() {
  try {
    const sessionstorage = sessionStorage.getItem("jwdToken");

    if (sessionstorage === null || sessionstorage === undefined) {
      console.log("working");
      window.location.href = "http://127.0.0.1:5500/";
    }
  } catch (error) {
    console.log(error);
  }
}

export { handleStorage };
