import { seshToken } from "../auth/auth.js";
import { baseUrl, fetchUrl } from "../constrantes/baseurl.js";
import { handleStorageWithUUid } from "../utils/getuserfromsession.js";
const createUser = async (body) => {
  try {
    const result = await fetch(`${fetchUrl}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(result);

    if (result.ok) {
      document.querySelector("#success").classList.toggle("d-none");
      window.location.href = `${baseUrl}/pages/post.html`;
    } else if (result.status === 409) {
      throw new Error("User Already exist");
    }
  } catch (w) {
    console.log(w);
  }
};

const logUserIn = async (body) => {
  try {
    const result = await fetch(`${fetchUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const res = await result.json();

    if (result.ok) {
      sessionStorage.setItem("jwdToken", res.token);
      sessionStorage.setItem("username", res.username);
      console.log(res);
      window.location.href = `${baseUrl}pages/post.html`;
    } else if (result.status === 400) {
      throw new Error("Invalid username or password");
    } else {
      throw new Error("someting went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

const userProfile = async () => {
  const token = seshToken();

  try {
    let res = await fetch(`${fetchUrl}/api/users/${handleStorageWithUUid()}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    res = await res.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (data) => {
  const token = seshToken();
  try {
    let res = await fetch(`${fetchUrl}/api/users/${handleStorageWithUUid()}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: " Bearer " + token,
      },
      body: JSON.stringify({
        fullName: data.fullName,
        bio: data.bio,
      }),
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  const token = seshToken();
  try {
    let res = await fetch(`${fetchUrl}/auth/logout`, {
      headers: {
        "Content-type": "application/json",
        Authorization: " Bearer " + token,
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { createUser, logout, logUserIn, updateUser, userProfile };
