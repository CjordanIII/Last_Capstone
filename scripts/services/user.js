const baseLink = "http://microbloglite.us-east-2.elasticbeanstalk.com";

const createUser = async (body) => {
  try {
    const result = await fetch(`${baseLink}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(result);

    if (result.ok) {
      document.querySelector("#success").classList.toggle("d-none");
      window.location.href = "http://127.0.0.1:5500/";
    } else if (result.status === 409) {
      throw new Error("User Already exist");
    }
  } catch (w) {
    console.log(w);
  }
};

const logUserIn = async (body) => {
  try {
    const result = await fetch(`${baseLink}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (result.ok) {
      console.log(result);
    } else if (result.status === 400) {
      throw new Error("Invalid username or password");
    } else {
      throw new Error("someting went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

export { createUser, logUserIn };
