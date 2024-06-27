import { getPost, sendpost } from "./services/post.js";
import { postCard } from "./utils/cards.js";
import { getuserfromsessionstorage } from "./utils/getuserfromsession.js";
import { handleStorage } from "./utils/utils.js";
window.onload = handleStorage();
const postDom = document.getElementById("post");
const user = document.getElementById("user");
const form = document.getElementById("modleform");
async function handlePost() {
  try {
    const post = await getPost();
    postDom.innerHTML = "";

    post.forEach((p) => {
      postCard(p, postDom);
    });
  } catch (error) {
    console.log(error);
  }
}
handlePost();

user.innerText = getuserfromsessionstorage();
async function handleModle() {
  try {
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);
    const { text } = formObj;
    const res = await sendpost(text);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (w) => {
  w.preventDefault();

  handleModle();
  handlePost();
  form.reset();
});
