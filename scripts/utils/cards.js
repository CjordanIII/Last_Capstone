import { fetchUrl } from "../constrantes/baseurl.js";

const postCard = (data, post) => {
  const { _id, text, username } = data;
  console.log(_id, text, username);
  const postHtml = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${username}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${text}</h6>
    <a href="#" class="card-link">Like</a>
    <a href="${fetchUrl}/post=${_id}" class="card-link">Comment</a>
  </div>
</div>`;

  post.innerHTML += postHtml;
};

export { postCard };
