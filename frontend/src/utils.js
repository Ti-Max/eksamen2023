export const createNewUser = async (
  firstName,
  lastName,
  email,
  address,
  password,
  category,
  project
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
      address: address,
      password: password,
      category: category,
      project: project,
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

export const getInfoByEmail = async (email) => {
  let user;

  await fetch("/getUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then((response) => response.json())
    .then((data) => {
      user = data.user;
      console.log(user);
    })
    .catch((err) => console.log(err));

  return user;
};

export const updateUserInfo = async (
  firstName,
  lastName,
  email,
  address,
  password,
  category,
  project_id
) => {
  let message = {};

  await fetch("/updateUserInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      firstName: firstName,
      lastName: lastName,
      address: address,
      password: password,
      category: category,
      project_id: project_id,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        message = { type: "error", text: data.error };
      } else {
        message = { type: "success", text: "User changed" };
      }
    })
    .catch((err) => console.log(err));

  return message;
};
