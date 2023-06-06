import React, { useState } from "react";
import { createNewUser } from "./utils";

export const CreateNewUserForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("Administrasjon");
  const [project, setProject] = useState(0);

  const [message, setMessage] = useState({});

  const createUser = async (e) => {
    e.preventDefault();

    console.log(email)
    const msg = await createNewUser(
      firstName,
      lastName,
      email,
      address,
      password,
      category,
      project
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
          value={project}
          onChange={(ev) => setProject(ev.target.value)}
        >
          <option value="0">Ingjen</option>
          <option value="1">Implementeringsprosjekt</option>
          <option value="2">Utviklingsprosjekt</option>
          <option value="3">Planleggingsprosjekt</option>
        </select>
        <button className="button-form">Create</button>
      </form>
      <div className={messageClasses}>{message.text}</div>
    </div>
  );
};
