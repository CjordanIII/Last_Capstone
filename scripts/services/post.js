import { seshToken } from "../auth/auth.js";
import { fetchUrl } from "../constrantes/baseurl.js";

async function getPost() {
  const token = seshToken();
  try {
    let res = await fetch(`${fetchUrl}/api/posts`, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
async function sendpost(text) {
  try {
    const token = seshToken();

    let res = await fetch(`${fetchUrl}/api/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },

      body: JSON.stringify({ text }),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export { getPost, sendpost };
