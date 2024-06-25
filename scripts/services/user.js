const createUser = async (body) => {
  try {
    const result = await fetch(
      "http://microbloglite.us-east-2.elasticbeanstalk.com/api/users",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    console.log(result);
  } catch (w) {
    console.log(w);
  }
};

export { createUser };
