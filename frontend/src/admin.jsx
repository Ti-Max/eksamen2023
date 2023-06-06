import React, { useState } from "react";
import { createNewUser, getAllUsers } from "./utils";

const NewUserForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("Administrasjon");
  const [message, setMessage] = useState({});

  const createUser = async (e) => {
    e.preventDefault();

    const msg = await createNewUser(
      firstName,
      lastName,
      email,
      password,
      category
    );
    setMessage(msg);
  };

  const messageClasses = `mt-2 ${message.type}-message`;
  return (
    <div>
      <div className="mb-2 text-xl font-bold text-slate-600">
        Fyll på brukerens data
      </div>
      <form onSubmit={createUser}>
        Email
        <input
          className="input-form"
          type="text"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="Email"
        />
        Navn
        <input
          placeholder="Navn"
          className="input-form"
          type="text"
          value={firstName}
          onChange={(ev) => setFirstName(ev.target.value)}
        />
        Etternavn
        <input
          placeholder="Etternavn"
          className="input-form"
          type="text"
          value={lastName}
          onChange={(ev) => setLastName(ev.target.value)}
        />
        Bruker category
        <select
          className="input-form"
          value={category}
          onChange={(ev) => setCategory(ev.target.value)}
        >
          <option value="Administrasjon">Administrasjon</option>
          <option value="IT-avdeling">IT-avdeling</option>
          <option value="Planlegging">Planlegging</option>
          <option value="Kundekonsulenter">Kundekonsulenter</option>
          <option value="Teknisk avdeling">Teknisk avdeling</option>
          <option value="Økonomi">Økonomi</option>
        </select>
        Password
        <input
          className="input-form"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="Password"
        />
        <button className="button-form">Create</button>
      </form>
      <div className={messageClasses}>{message.text}</div>
    </div>
  );
};

const UserRow = ({ user }) => {
  const [isEditable, setIsEditable] = useState(false);

  const editUser = (e) => {
    e.preventDefault()
    console.log("editUser");
  };

  let row;
  if (isEditable) {
    row = (
      <div>
        <form onSubmit={editUser}>
          <input
            className="input-form"
            type="text"
            id="email-signup"
            placeholder="Email"
          />
          <input
            placeholder="Navn"
            className="input-form"
            type="text"
            id="firstName-signup"
          />
          <input
            placeholder="Etternavn"
            className="input-form"
            type="text"
            id="lastName-signup"
          />
          <select id="category-signup">
            <option value="Administrasjon">Administrasjon</option>
            <option value="IT-avdeling">IT-avdeling</option>
            <option value="Planlegging">Planlegging</option>
            <option value="Kundekonsulenter">Kundekonsulenter</option>
            <option value="Teknisk avdeling">Teknisk avdeling</option>
            <option value="Økonomi">Økonomi</option>
          </select>
          <input
            className="input-form"
            type="password"
            id="password-signup"
            placeholder="Password"
          />
          <button className="button-form">Create</button>
        </form>
        <button
          type="button"
          className="sml-btn"
          onClick={() => {
            setIsEditable(false);
          }}
        >
          Cancel
        </button>
      </div>
    );
  } else {
    row = (
      <div className="flex justify-between border-b-slate-800 border-b-[1px] py-1">
        <div className="m-1">
          
        {user.email}
        </div>
        <button
          className="sml-btn"
          type="button"
          onClick={() => {
            setIsEditable(true);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
  return <div>{row}</div>;
};

const AllUsers = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <UserRow user={user} />
        </div>
      ))}
    </div>
  );
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
    actions = <NewUserForm />;
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

        <button className={showAllUsersClasses} type="button" onClick={showAllUsersPanel}>
          Administrer alle brukere
        </button>
      </div>

      <div className="ml-6 grid w-full rounded-md border-2 border-slate-500 bg-gray-300 p-4 ">
        {actions}
      </div>
    </div>
  );
};
