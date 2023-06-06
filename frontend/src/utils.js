export const createNewUser = async (
  firstName,
  lastName,
  email,
  password,
  category
) => {
  let message = {};

  await fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      category: category,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        message = { type: "error", text: data.error };
      } else {
        message = { type: "success", text: "User Created" };
      }
    })
    .catch((err) => console.log(err));

  return message;
};

export const getAllUsers = async () => {
  let users;
  let message;

  await fetch("/getAllUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        message = { type: "error", text: data.error };
      } else {
        users = data.users;
      }
    })
    .catch((err) => console.log(err));

  return { users, message };
};
