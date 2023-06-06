import React, { useState } from "react";
import { getAllUsers } from "./utils";
import { CreateNewUserForm } from "./CreateNewUserForm";
import { UpdateUserInfoForm } from "./UpdateUserInfoForm";

const AllUsers = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState("");

  let view;
  if (selectedUser === "") {
    view = (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <div className="flex justify-between border-b-[1px] border-b-slate-800 py-1">
              <div className="m-1">{user.email}</div>
              <button
                className="sml-btn"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedUser(user.email);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    const user = users.find((user) => user.email === selectedUser);
    view = (
      <div>
        <UpdateUserInfoForm user={user} />
        <button
          onClick={() => setSelectedUser("")}
          type="button"
          className="rounded-md bg-slate-200 p-2 text-slate-700 hover:bg-slate-300"
        >
          Cancel
        </button>
      </div>
    );
  }

  return <div>{view}</div>;
};

export const AdminPage = () => {
  const [option, setOption] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const showAllUsersPanel = async () => {
    const { users } = await getAllUsers();
    setAllUsers(users);
    setOption("showAllUsers");
  };

  const createUserPanel = () => {
    setOption("createUser");
  };

  let actions;
  let createUserClasses;
  let showAllUsersClasses;
  if (option === "createUser") {
    actions = <CreateNewUserForm />;
    createUserClasses = "active-btn";
    showAllUsersClasses = "btn";
  } else if (option === "showAllUsers") {
    createUserClasses = "btn";
    showAllUsersClasses = "active-btn";
    actions = <AllUsers users={allUsers} />;
  } else {
    createUserClasses = "btn";
    showAllUsersClasses = "btn";

    actions = (
      <div className="place-self-center text-3xl text-gray-400">
        Velg et alternativ til venstre
      </div>
    );
  }

  return (
    <div className="mx-8 flex h-full bg-slate-300 p-5">
      <div className="w-36">
        <button
          className={createUserClasses}
          type="button"
          onClick={createUserPanel}
        >
          Lag en ny bruker
        </button>
        <br />

        <button
          className={showAllUsersClasses}
          type="button"
          onClick={showAllUsersPanel}
        >
          Administrer alle brukere
        </button>
      </div>

      <div className="ml-6 grid w-full rounded-md border-2 border-slate-500 bg-gray-300 p-4 ">
        {actions}
      </div>
    </div>
  );
};
