import React, { useState } from "react";
import { updateUserInfo } from "./utils";

export const UpdateUserInfoForm = ({ user }) => {
  console.log(user)
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [address, setAddress] = useState(user.address);
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState(user.category);
  const [project_id, setProject_id] = useState(user.projects_id);

  const [message, setMessage] = useState({});

  const updateUser = async (e) => {
    e.preventDefault();

    const msg = await updateUserInfo(
      firstName,
      lastName,
      user.email,
      address,
      password,
      category,
      project_id
    );
    setMessage(msg);
  };

  const messageClasses = `mt-2 ${message.type}-message`;
  return (
    <div>
      <div className="mb-2 text-xl font-bold text-slate-600">
        Du endrer data til bruker <span className="text-slate-800 italic">{user.email}</span>
      </div>
      <form onSubmit={updateUser}>
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
        Address
        <input
          placeholder="Address"
          className="input-form"
          type="text"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
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
        Prosjekt
        <select
          className="input-form"
          value={project_id}
          onChange={(ev) => setProject_id(ev.target.value)}
        >
          <option value="0">Ingjen</option>
          <option value="1">Implementeringsprosjekt</option>
          <option value="2">Utviklingsprosjekt</option>
          <option value="3">Planleggingsprosjekt</option>
        </select>
        <button className="button-form">Update</button>
      </form>
      <div className={messageClasses}>{message.text}</div>
    </div>
  );
};
