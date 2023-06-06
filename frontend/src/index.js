import React from "react";
import ReactDOM from "react-dom/client";
import AuthForm from "./Auth";
import { AdminPage } from "./admin";
import { UserPage } from "./user";

// access page
const domRoot = document.getElementById("auth-form-root");
if (domRoot) {
  const AuthRoot = ReactDOM.createRoot(domRoot);

  AuthRoot.render(<AuthForm />);
} else {
  // main page
  const userRootEl = document.getElementById("user-root");
  const adminRootEl = document.getElementById("admin-root");

  if (userRootEl) {
    const UserRoot = ReactDOM.createRoot(userRootEl);
    UserRoot.render(<UserPage />);
  } else if (adminRootEl) {
    const AdminRoot = ReactDOM.createRoot(adminRootEl);
    AdminRoot.render(<AdminPage />);
  }
}
