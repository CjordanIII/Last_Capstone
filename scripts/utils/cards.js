import { myApp } from "../auth/auth.js";
import { fetchUrl } from "../constrantes/baseurl.js";

const postCard = (data, post) => {
  const { _id, text, username, createdAt, likes } = data;
  const date = new Date(createdAt).toLocaleDateString();
  const numOfLikes = likes.length;
  let updatedUsername;
  if (username.includes(myApp)) {
    updatedUsername = username.split(" ")[0];
    console.log(updatedUsername, "USERNAMWE");
  } else {
    updatedUsername = username;
  }

  const postHtml = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${updatedUsername}</h5>
    <span>${date}</span>
    <h6 class="card-subtitle mb-2 text-body-secondary">${text}</h6>
    <span><i class="bi bi-heart"></i>${numOfLikes}</span>
    <a href="${fetchUrl}/post=${_id}" class="card-link">Comment</a>
  </div>
</div>`;

  post.innerHTML += postHtml;
};

export { postCard };
