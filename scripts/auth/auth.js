const seshToken = () => {
  const token = sessionStorage.getItem("jwdToken");
  return token;
};
const myApp = "0961df67-ca1f-4dfc-90e5-e6f761bdde89";
export { myApp, seshToken };
