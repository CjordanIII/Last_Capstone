import { myApp } from "../auth/auth.js";

const postCard = (data, post) => {
  const { _id, text, username, createdAt, likes } = data;
  const date = new Date(createdAt).toLocaleDateString();
  const numOfLikes = likes.length;
  let updatedUsername;
  if (username.includes(myApp)) {
    updatedUsername = username.split(" ")[0];
  } else {
    updatedUsername = username;
  }

  const postHtml = `
<div class="card" style="width: 18rem;">
<input type="text" class="d-none" value="${_id}" disabled />
  <div class="card-body">
    <h5 class="card-title">${updatedUsername}</h5>
    <span>${date}</span>
    <h6 class="card-subtitle mb-2 text-body-secondary">${text}</h6>
    <span><i class="bi bi-heart"></i>${numOfLikes}</span>
    
  </div>
</div>`;

  post.innerHTML += postHtml;
};

export { postCard };
