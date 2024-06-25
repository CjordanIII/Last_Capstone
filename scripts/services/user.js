const createUser = async (body) => {
  try {
    const result = await fetch(
      "http://microbloglite.us-east-2.elasticbeanstalk.com/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    console.log(result);

    if (result.ok) {
      window.location.href = "http://127.0.0.1:5500/";
    }
  } catch (w) {
    console.log(w);
  }
};

export { createUser };
