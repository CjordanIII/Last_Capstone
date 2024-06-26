import { seshToken } from "../auth/auth.js";
import { fetchUrl } from "../constrantes/baseurl.js";

async function getPost() {
  try {
    const token = await seshToken();
    let res = await fetch(`${fetchUrl}/api/posts`, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + (await seshToken()),
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export { getPost };
