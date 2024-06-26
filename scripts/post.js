import { getPost } from "./services/post.js";
import { postCard } from "./utils/cards.js";
import { handleStorage } from "./utils/utils.js";
window.onload = handleStorage();
const postDom = document.getElementById("post");

async function handlePost() {
  try {
    const post = await getPost();

    post.forEach((p) => {
      postCard(p, postDom);
    });

    console.log(post);
  } catch (error) {
    console.log(error);
  }
}
handlePost();
